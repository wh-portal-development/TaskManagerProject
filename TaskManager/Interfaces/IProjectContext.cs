﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TaskManager.Interfaces
{
    public interface IProjectContext
    {
        public List<object> GetAll();
    }
}
