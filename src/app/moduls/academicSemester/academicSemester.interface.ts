
export type TMonth = 
| "January" | "February" | "March" | "April" | "May" | "June"
| "July" | "August" | "September" | "October" | "November" | "December";


type TAcademicSemester = {
    name : "Spring" | "Fall" | "Summar";
    code: "01"|"02"|"03";
    year: Date;
    startMonth : TMonth;
    endMonth : TMonth;

}

export default TAcademicSemester;