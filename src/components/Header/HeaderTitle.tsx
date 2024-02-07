import logo from '../../assets/logo.svg'

const HeaderTitle = () => {
  return (
    <div className='flex items-center gap-x-4 text-gray-700'>
      <div className='h-[30px] w-[30px]'>
        <img src={logo} alt='ringle' />
      </div>
      <div className='text-h-4 font-bold'>수업 예약</div>
      <div className='text-sm'>STEP 1. 튜터 및 시간 선택</div>
    </div>
  )
}

export default HeaderTitle
