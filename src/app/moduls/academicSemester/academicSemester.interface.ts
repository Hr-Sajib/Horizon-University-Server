
type Month = 
| "January" | "February" | "March" | "April" | "May" | "June"
| "July" | "August" | "September" | "October" | "November" | "December";


type TAcademicSemester = {
    name : "Spring" | "Fall" | "Summar";
    code: "01"|"02"|"03";
    year: Date;
    startMonth : Month;
    endMonth : Month;

}

export default TAcademicSemester;