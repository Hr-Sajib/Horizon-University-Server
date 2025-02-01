

export type Guardian ={
    fatherName: string;
    fatherOccupation: string;
    motherName: string;
    motherOccupation: string;
    fatherContactNo: string;
    motherContactNo: string;
}

export type LocalGuardian ={
    name: string;
    occupation: string;
    contactNo: string;
}


export type Student = {
    name: {
        firstName: string;
        middleName: string;
        lastName: string;
        address: string;
    },
    id: string,
    gender:"male" | "female";
    dateOfBirth: string;
    contactNo: string;
    emergencyContactNo: string;
    bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
    presentAddress: string;
    permanentAddress: string;
    guardian: Guardian;
    localGuardian: LocalGuardian;
    profileImage?: string;
    isActive: "active" | "blocked";

}