
function DeleteTask({onDel,task}) {
  const handleSubmit = e =>{
    e.preventDefault();
    onDel(task);
}
  return (
    <form onSubmit={handleSubmit}>
    <input type="submit" value = "Delete" className='btn'/>
    </form>
  )
}

export default DeleteTask