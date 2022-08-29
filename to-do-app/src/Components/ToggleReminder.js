import React from 'react'
import { useState } from 'react'
function ToggleReminder({hasReminder, onToggleReminder, taskID}) {
    const [reminder, setReminder] = useState(hasReminder);

  return (
    <div className='form-control-check'>
    <label>Reminder</label>
    <input 
    type="checkbox"
    checked = {reminder}
    value = {reminder}
    onChange = {e =>{
        setReminder(e.target.checked);
        onToggleReminder(taskID);
    }}
    />
    </div>
  )
}

export default ToggleReminder