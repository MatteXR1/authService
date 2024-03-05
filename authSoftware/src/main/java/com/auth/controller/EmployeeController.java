package com.auth.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.auth.DTO.EmployeeDTO;
import com.auth.DTO.LoginDTO;
import com.auth.payloadResponse.LoginResponse;
import com.auth.service.EmployeeService;

@RestController
@CrossOrigin
@RequestMapping("api/employee")
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;

	@PostMapping(path = "/register")
	public String saveEmployee(@RequestBody EmployeeDTO employeeDTO) {
		String id = employeeService.addEmployee(employeeDTO);
		return id;
	}

	@PostMapping(path = "/login")
	public ResponseEntity<?> loginEmployee(@RequestBody LoginDTO loginDTO) {
		LoginResponse loginResponse = employeeService.loginEmployee(loginDTO);
		return ResponseEntity.ok(loginResponse);
	}
}// Fine Class