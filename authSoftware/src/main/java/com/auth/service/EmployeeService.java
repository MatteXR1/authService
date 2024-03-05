package com.auth.service;

import com.auth.DTO.EmployeeDTO;
import com.auth.DTO.LoginDTO;
import com.auth.payloadResponse.LoginResponse;


public interface EmployeeService {

	String addEmployee(EmployeeDTO employeeDTO);

	LoginResponse loginEmployee(LoginDTO loginDTO);

}// Fine Interface