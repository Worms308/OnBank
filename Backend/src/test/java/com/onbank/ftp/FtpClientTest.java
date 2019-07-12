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


import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.net.URLConnection;
import java.nio.file.Files;

import static org.assertj.core.api.Assertions.assertThat;


class FtpClientTest {

    private FakeFtpServer fakeFtpServer;

    private FtpClient ftpClient;

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

        ftpClient = new FtpClient("localhost", fakeFtpServer.getServerControlPort(), "admin", "admin");
        ftpClient.open();
    }

    @AfterEach
    void teardown() throws IOException {
        ftpClient.close();
        fakeFtpServer.stop();
    }

    @Test
    void givenRemoteFile_whenDownloading_thenItIsOnTheLocalFilesystem() throws IOException {
        String ftpUrl = String.format(
                "ftp://user:password@localhost:%d/foobar.txt", fakeFtpServer.getServerControlPort());

        URLConnection urlConnection = new URL(ftpUrl).openConnection();
        InputStream inputStream = urlConnection.getInputStream();
        Files.copy(inputStream, new File("downloaded_buz.txt").toPath());
        inputStream.close();

        assertThat(new File("downloaded_buz.txt")).exists();

        new File("downloaded_buz.txt").delete(); // cleanup
    }

    @Test
    void shouldUploadNewFile_Upload() throws IOException {
        ftpClient = new FtpClient("localhost", 21, "admin", "admin");
        File file = new File("transfer.csv");
        if (file.createNewFile()) System.out.println("Success transfer");
        ftpClient.open();
        ftpClient.uploadFile(file, "/transfer.csv");
        ftpClient.downloadFile("/transfer.csv", "transferDownloaded.csv");
        assertThat(new File("transferDownloaded.csv")).exists();
        file.delete();
        new File("transferDownloaded.csv").delete();
    }


    @Test
    void shouldCreateNewFileAndDeleteIt_Download() throws IOException {
        File file = new File("downloaded.txt");
        ftpClient.downloadFile("/buz.txt", "downloaded.txt");
        assertThat(file).exists();
        file.delete(); // cleanup
    }
}
