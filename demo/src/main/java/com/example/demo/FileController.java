package com.example.demo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.text.ParseException;
import java.util.Collection;
import java.util.Date;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@CrossOrigin("*")

public class FileController {

    @Autowired
    private FileRepository fileRepository;


    @PostMapping("/upload")
    public Collection<FileUpload> uploadfile(@RequestBody Map<String, String> body)
            throws ParseException {

        String workname = body.get("workname").toString();
        String workurl = body.get("workurl").toString();

        FileUpload file = new FileUpload();
        file.setWorkdate(new Date());
        file.setWorkname(workname);
        file.setWorkurl(workurl);
        fileRepository.save(file);
        return fileRepository.findAll().stream().collect(Collectors.toList());
    }

    @GetMapping("/Download")
    public Collection<FileUpload> Actives() {
        return fileRepository.findAll().stream().collect(Collectors.toList());
    }
}
