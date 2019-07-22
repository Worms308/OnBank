package com.onbank.ftp;

import lombok.Setter;
import org.apache.commons.net.PrintCommandListener;
import org.apache.commons.net.ftp.FTPClient;
import org.apache.commons.net.ftp.FTPReply;

import java.io.*;

@Setter
public class FtpConnection implements Closeable{

    private final String server;
    private final int port;
    private final String user;
    private final String password;
    private FTPClient ftp;

    public FtpConnection(String server, int port, String user, String password) throws IOException {
        this.server = server;
        this.port = port;
        this.user = user;
        this.password = password;
        open();
    }

    private void open() throws IOException {
        ftp = new FTPClient();

        ftp.addProtocolCommandListener(new PrintCommandListener(new PrintWriter(System.out)));

        ftp.connect(server, port);
        int reply = ftp.getReplyCode();
        if (!FTPReply.isPositiveCompletion(reply)) {
            ftp.disconnect();
            throw new IOException("Exception in connecting to FTP Server");
        }
        ftp.login(user, password);
    }

    public void close() throws IOException {
        ftp.disconnect();
    }

    public void downloadFile(String source, String destination) throws IOException {
        FileOutputStream out = new FileOutputStream(destination);
        ftp.retrieveFile(source, out);
    }

    public void uploadFile(File file, String path) throws IOException {
        ftp.storeFile(path, new FileInputStream(file));
    }
}
