package com.example.jsonparser;

public class Photo {
    String farmID, serverID, ID, secret;

    public Photo(String farmID, String serverID, String ID, String secret) {
        this.farmID = farmID;
        this.serverID = serverID;
        this.ID = ID;
        this.secret = secret;
    }

    @Override
    public String toString() {
        return "http://live.staticflickr.com/" + serverID + "/" + ID + "_" + secret + "_o.jpg";
    }
}


