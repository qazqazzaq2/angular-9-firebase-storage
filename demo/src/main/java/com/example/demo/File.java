package com.example.demo;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class File {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private String workname;
    private String workurl;
    private Date workdate;

    public File(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getWorkname() {
        return workname;
    }

    public void setWorkname(String workname) {
        this.workname = workname;
    }

    public String getWorkurl() {
        return workurl;
    }

    public void setWorkurl(String workurl) {
        this.workurl = workurl;
    }

    public Date getWorkdate() {
        return workdate;
    }

    public void setWorkdate(Date workdate) {
        this.workdate = workdate;
    }
}
