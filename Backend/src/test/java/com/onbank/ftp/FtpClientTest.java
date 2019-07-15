package com.onbank.ftp;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockftpserver.fake.FakeFtpServer;
import org.mockftpserver.fake.UserAccount;
import org.mockftpserver.fake.filesystem.DirectoryEntry;
import org.mockftpserver.fake.filesystem.FileEntry;
import org.mockftpserver.fake.filesystem.FileSystem;
import org.mockftpserver.fake.filesystem.UnixFakeFileSystem;
import org.springframework.beans.factory.annotation.Value;

import java.io.File;
import java.io.IOException;

import static org.assertj.core.api.Assertions.assertThat;


class FtpClientTest {

    private FakeFtpServer fakeFtpServer;
    @Value("${onbank.server}")
    private String server;
    @Value("${onbank.port}")
    private int port;
    @Value("${onbank.user")
    private String user;
    @Value("${onbank.password}")
    private String password;
    private FtpConnection ftpConnection;

    @BeforeEach
    void setup() throws IOException {
        fakeFtpServer = new FakeFtpServer();
        fakeFtpServer.setServerControlPort(0);
        fakeFtpServer.addUserAccount(new UserAccount("user", "password", "/data"));

        FileSystem fileSystem = new UnixFakeFileSystem();
        fileSystem.add(new DirectoryEntry("/data"));
        fileSystem.add(new FileEntry("/data/foobar.txt", "abcdef 1234567890"));
        fakeFtpServer.setFileSystem(fileSystem);

        fakeFtpServer.start();

        ftpConnection = new FtpConnection(server, fakeFtpServer.getServerControlPort(), user, password);
        ftpConnection.open();
    }

    @AfterEach
    void teardown() throws IOException {
        ftpConnection.close();
        fakeFtpServer.stop();
    }

    @Test
    void shouldUploadNewFile_Upload() throws IOException {
        File file = new File("transfer.csv");
        if (file.createNewFile()) System.out.println("Success transfer");
        ftpConnection.open();
        ftpConnection.uploadFile(file, "/transfer.csv");
        ftpConnection.downloadFile("/transfer.csv", "transferDownloaded.csv");
        assertThat(new File("transferDownloaded.csv")).exists();
        file.delete();
        new File("transferDownloaded.csv").delete();
    }


    @Test
    void shouldCreateNewFileAndDeleteIt_Download() throws IOException {
        File file = new File("downloaded.txt");
        ftpConnection.downloadFile("/buz.txt", "downloaded.txt");
        assertThat(file).exists();
        file.delete(); // cleanup
    }
}
