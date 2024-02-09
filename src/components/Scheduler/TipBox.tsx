const TipBox = () => {
  return (
    <div className='flex justify-between items-center px-4 py-3 my-4 bg-purple-50 text-h-5 rounded-md text-nowrap'>
      <div>
        <span className='text-purple-500 pr-2'>Ringle's Tip</span>
        <span>수업을 미리 예약하면 나와 더 잘 맞는 튜터를 만날 수 있어요.</span>
      </div>
      <i className='material-symbols-outlined pl-2'>close</i>
    </div>
  )
}

export default TipBox
