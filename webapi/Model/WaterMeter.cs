﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Model
{
    public class WaterMeter
    {
        [Key]
        public int Id { get; set; }
        public string SerialNumber { get; set; }
        public int Reading { get; set; }
        [ForeignKey(nameof(HomeId))]
        public int HomeId { get; set; }
        public Home Home { get; set; }
    }
}
