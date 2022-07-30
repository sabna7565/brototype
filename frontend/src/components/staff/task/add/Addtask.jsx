import './Addtask.scss'

const Addtask = () => {

    const rows = [
        { week: 'week1',  },{ week: 'week2', },{ week: 'week3',  },{ week: 'week4', },
        { week: 'week5',  },{ week: 'week6',  },{ week: 'week7',  },{ week: 'week8',  },
        { week: 'week9',  },{ week: 'week10',  },{ week: 'week11',  },{ week: 'week12',  },
        { week: 'week13',  },{ week: 'week14',  },
        { week: 'week15',  },{ week: 'week16',  },
        { week: 'week17',  },{ week: 'week18',},
        { week: 'week19',  },{ week: 'week20',  },
        { week: 'week21',  },{ week: 'week22',  },
        { week: 'week23',  },{ week: 'week24',  },
      ];

return (
      <div>
        <div className="containers">  
  <form id="contact" >
    <h3>Add Task</h3>
    <fieldset>
      <select name='week'  tabindex="2" required>
      <option value=" ">select week</option>
      {rows?.map((row) => (
         <option value={row.week}>{row.week}</option> 
        ))} 
      </select>
    </fieldset>
    <fieldset>
    <input name='attachment' type="file" tabindex="1" required autofocus />
    </fieldset>
    
    
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
</div>

    </div>
  )
}


export default Addtask