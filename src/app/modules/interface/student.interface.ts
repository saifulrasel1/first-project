import { Schema, model, connect } from 'mongoose';

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNO: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};
export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type LocalGuardian = {
  name: string;
  occupation: string;
  address: string;
  contactNo: string;
};

export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'feamle';
  email: string;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  contactNumber: string;
  emergencyContactNo: string;
  dateOfBirth?: string;
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImg?: string;
  isActive: 'active' | 'blocked';
};
