const BackButton = () => {
  return (
    <button className='flex items-center gap-x-3'>
      <i className='material-symbols-outlined text-[20px] text-primary'>
        chevron_left
      </i>
      <div className='text-primary text-xs'>나가기</div>
    </button>
  )
}

export default BackButton
