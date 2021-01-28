using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Scott_sFirstASP.NETWebApp.Models
{
    public class GradeCalculatorModel
    {
        // getters and setters for each grade type with the restriction that they have to be between 0 and 100.
        [Range(0, 100)]
        
        public decimal Assignments { get; set; } 

        [Range(0, 100)]
        public decimal GroupProject { get; set; }

        [Range(0, 100)]
        public decimal Quizzes { get; set; }

        [Range(0, 100)]
        public decimal Exams { get; set; }

        [Range(0, 100)]
        public decimal INTEX { get; set; }
    }
}
