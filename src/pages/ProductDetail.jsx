import React from 'react'
import Header from './components/Header'
import TabsLgBasic from './components/TabsLgBasic'
import Footer from './components/Footer'

const ProductDetail = () => {
  return (
    <div>
  
   
      <div className='sm:hidden  bg-[#010F1C] text-white items-center flex justify-between p-3 '>

      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6L9 14.5L18 23" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        <p className='text-[20px] font-[600]'>Product Details</p>

        

        <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0948 8.15618C14.0305 7.07579 13.3179 6.40642 12.2375 6.39188C11.7862 6.38607 11.3345 6.38755 10.8828 6.38902C10.6795 6.38969 10.4763 6.39035 10.2731 6.39035C9.58282 6.39035 8.89243 6.38998 8.20199 6.38961C6.56987 6.38873 4.93745 6.38785 3.30579 6.39188C2.19937 6.39456 1.49097 7.02144 1.41213 8.1072L14.0948 8.15618ZM14.0948 8.15618C14.2399 10.6201 14.3819 13.0844 14.5066 15.5502C14.5717 16.8392 13.8227 17.6015 12.5238 17.6054C11.405 17.6086 10.2865 17.6078 9.1682 17.6071C8.68898 17.6068 8.20981 17.6065 7.73071 17.6065C7.29415 17.6065 6.85755 17.6066 6.42095 17.6068C5.28598 17.6072 4.15093 17.6076 3.01608 17.6054L14.0948 8.15618ZM1.56254 17.1235L1.52847 17.1601C1.12361 16.7832 0.928313 16.3033 0.951909 15.7608L1.56254 17.1235ZM1.56254 17.1235L1.52847 17.1601C1.95126 17.5537 2.47451 17.6546 3.01598 17.6554C4.15089 17.6576 5.28602 17.6572 6.421 17.6568C6.8576 17.6566 7.29418 17.6565 7.73071 17.6565C8.20975 17.6565 8.68888 17.6568 9.16809 17.6571C10.2864 17.6578 11.4051 17.6586 12.5239 17.6554C13.183 17.6534 13.7093 17.4589 14.0626 17.0945C14.416 16.73 14.5896 16.2023 14.5566 15.5477C14.4318 13.0816 14.2898 10.6172 14.1447 8.15325L14.1447 8.15321C14.112 7.60246 13.9135 7.15234 13.5816 6.83803C13.2497 6.52377 12.7887 6.3493 12.2382 6.34188L12.2382 6.34188C11.7864 6.33607 11.334 6.33755 10.8822 6.33902C10.679 6.33969 10.4759 6.34035 10.2731 6.34035C9.58287 6.34035 8.89252 6.33998 8.2021 6.33961C6.56995 6.33873 4.93741 6.33785 3.30567 6.34188C2.74308 6.34324 2.27654 6.50344 1.94017 6.80622C1.60358 7.1092 1.40243 7.55035 1.36226 8.10358L1.36226 8.10359C1.30012 8.96288 1.25879 9.82385 1.2175 10.684C1.19772 11.096 1.17796 11.5077 1.15592 11.919L1.15592 11.919M1.56254 17.1235L1.15592 11.919M1.15592 11.919C1.13396 12.3297 1.11073 12.7402 1.0875 13.1509M1.15592 11.919L1.0875 13.1509M12.3669 7.34483L12.3619 7.39459C12.5951 7.4179 12.7706 7.5022 12.8923 7.64307C13.0146 7.78467 13.0874 7.9892 13.1031 8.262L13.1031 8.26204C13.1442 8.96884 13.183 9.67554 13.2218 10.3823C13.2504 10.9037 13.279 11.4252 13.3086 11.9467C13.3324 12.3664 13.3571 12.786 13.3819 13.2055C13.4281 13.9878 13.4742 14.7701 13.5141 15.5527C13.5337 15.9367 13.4632 16.1973 13.3038 16.363C13.1443 16.5289 12.8848 16.6112 12.4988 16.612C11.3991 16.6144 10.2996 16.6138 9.20009 16.6132C8.71898 16.613 8.23787 16.6127 7.75673 16.6127C7.14198 16.6127 6.52731 16.6129 5.91258 16.613C4.99035 16.6132 4.06799 16.6133 3.14506 16.6131C3.12292 16.6131 3.10131 16.6133 3.08003 16.6135C3.03183 16.614 2.98527 16.6145 2.93795 16.6124C2.58489 16.5966 2.34441 16.5139 2.19493 16.3577C2.04594 16.202 1.97749 15.9628 1.99329 15.6098C2.03413 14.7126 2.08643 13.8162 2.13875 12.9195C2.16975 12.3881 2.20076 11.8566 2.2294 11.3247L2.2294 11.3246C2.26446 10.6687 2.29529 10.0125 2.32611 9.35637C2.33869 9.0886 2.35126 8.82085 2.36413 8.55316C2.38809 8.05444 2.4585 7.76986 2.63108 7.60534C2.80365 7.44082 3.09123 7.38412 3.59053 7.38412H3.59576C6.39777 7.38412 9.19901 7.38412 12.001 7.3845C12.0135 7.3845 12.026 7.38449 12.0384 7.38447C12.1483 7.38434 12.2564 7.3842 12.362 7.39459L12.3669 7.34483ZM12.3669 7.34483C12.8529 7.39344 13.1208 7.69961 13.153 8.25913L2.27616 9.35419C2.28873 9.08638 2.30131 8.81857 2.31418 8.55076C2.36202 7.55532 2.59395 7.33412 3.59053 7.33412H3.59576C6.39777 7.33412 9.19901 7.33412 12.001 7.3345C12.0135 7.3345 12.026 7.33448 12.0385 7.33447C12.148 7.33433 12.2587 7.33418 12.3669 7.34483ZM1.0875 13.1509C1.0383 14.0205 0.989094 14.8902 0.95191 15.7608L1.0875 13.1509Z" fill="white" stroke="white" stroke-width="0.1"/>
<path d="M5.0789 10.068C5.55432 10.0628 5.94237 9.67128 5.94237 9.19751L5.94237 9.19747C5.94196 8.71373 5.56766 8.33341 5.08539 8.32813L5.08535 8.32813C4.59867 8.32326 4.22102 8.68994 4.21088 9.17619L4.21088 9.17635C4.20236 9.66115 4.60148 10.0737 5.0789 10.068ZM5.0789 10.068L5.07834 10.018M5.0789 10.068C5.07891 10.068 5.07893 10.068 5.07894 10.068L5.07834 10.018M5.07834 10.018C4.63019 10.0234 4.25283 9.63495 4.26087 9.17723C4.27044 8.71836 4.62559 8.37354 5.08485 8.37813C5.53951 8.3831 5.89199 8.74094 5.89237 9.19751C5.89237 9.64376 5.5265 10.0131 5.07834 10.018Z" fill="black" stroke="black" stroke-width="0.1"/>
<path d="M10.4334 10.068C10.9084 10.0628 11.2969 9.6713 11.2969 9.19751L11.2969 9.19747C11.2965 8.71373 10.9222 8.33341 10.4399 8.32813L10.4399 8.32813C9.95249 8.32326 9.57431 8.68988 9.56538 9.17631M10.4334 10.068L10.4328 10.018L10.4334 10.068C10.4334 10.068 10.4334 10.068 10.4334 10.068ZM10.4334 10.068C9.95563 10.0737 9.55646 9.66117 9.56538 9.17631M9.56538 9.17631L9.61537 9.17723L9.56538 9.17631Z" fill="black" stroke="black" stroke-width="0.1"/>
<path d="M5.59527 8.89973L5.54519 8.89976L4.59912 8.90014L4.54924 8.90016L4.5491 8.85028C4.54604 7.76236 4.54144 5.15415 4.55408 4.06604L4.55408 4.06603C4.57079 2.64269 5.48951 1.43156 6.82706 1.01914C8.14434 0.612957 9.61238 1.10617 10.3951 2.21024C10.7861 2.76142 10.9423 3.3858 10.9505 4.03921L10.9505 4.03925C10.9623 5.06971 10.963 7.4419 10.9634 8.63461C10.9634 8.71144 10.9634 8.78337 10.9635 8.84974L10.9635 8.89976H10.9135H9.96587H9.91662L9.91588 8.85051C9.90797 8.32454 9.90643 7.48211 9.90484 6.61319C9.90296 5.58428 9.90101 4.51823 9.88833 3.89656M5.59527 8.89973L9.93832 3.89555M5.59527 8.89973L5.59517 8.84965M5.59527 8.89973L5.59517 8.84965M9.88833 3.89656L9.93832 3.89555M9.88833 3.89656C9.88833 3.89657 9.88833 3.89657 9.88833 3.89657L9.93832 3.89555M9.88833 3.89656C9.88011 3.49644 9.76224 3.12817 9.5272 2.79947M9.93832 3.89555C9.9299 3.48566 9.80896 3.10754 9.56785 2.77037M9.5272 2.79947L9.56785 2.77037M9.5272 2.79947C9.01586 2.0851 8.03516 1.75897 7.15598 2.01732M9.5272 2.79947C9.52719 2.79947 9.52719 2.79946 9.52718 2.79946L9.56785 2.77037M9.56785 2.77037C9.04354 2.03786 8.04045 1.70528 7.14184 1.96935C6.2107 2.24376 5.57234 3.05664 5.55052 4.07274L7.15598 2.01732M7.15598 2.01732C6.24573 2.28556 5.62186 3.07948 5.60051 4.07382M7.15598 2.01732L5.60051 4.07382M10.9135 8.84975L10.8635 8.84977C10.8635 8.84977 10.8635 8.84976 10.8635 8.84975H10.9135ZM10.9135 8.84975V8.79975H10.9135C10.9135 8.81675 10.9135 8.83342 10.9135 8.84975ZM5.59517 8.84965C5.59472 8.64052 5.59378 8.37514 5.59272 8.07517M5.59517 8.84965L5.59272 8.07517M5.59272 8.07517C5.58827 6.81674 5.58167 4.94963 5.60051 4.07382M5.59272 8.07517L5.60051 4.07382" fill="white" stroke="white" stroke-width="0.1"/>
</svg>



      </div>
      <Header />
      <div className="xl:w-[1280px] lg:w-[1080px] md:w-[786px] sm:w-[600px] sm:mx-auto mx-4">
        <div className="sm:flex block gap-12 my-20 mx-10 sm:mx-0">
          <img 
            src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772447/Frame_1000006917_nnzhbx.png" 
            alt="Product Image" 
          />
          <div>
            <h2 className='sm:text-[32px] text-[20px] sm:mt-0 mt-5 font-[600] text-black'>Chicken Wraps Recipe</h2>
            <ul className='sm:flex hidden items-center mt-2'>
              <li>
<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9216 5.2603L15.1916 7.8503C15.2993 8.06835 15.4585 8.25693 15.6554 8.39978C15.8522 8.54263 16.0809 8.63547 16.3216 8.6703L19.1716 9.0803C19.4487 9.12054 19.7091 9.23759 19.9232 9.41817C20.1373 9.59876 20.2965 9.83568 20.3829 10.1021C20.4693 10.3685 20.4794 10.6538 20.412 10.9257C20.3446 11.1975 20.2024 11.4451 20.0016 11.6403L17.9416 13.6403C17.7619 13.8129 17.6284 14.0279 17.5533 14.2655C17.4781 14.5031 17.4638 14.7557 17.5116 15.0003L17.9916 17.8403C18.0378 18.1152 18.0064 18.3975 17.9011 18.6556C17.7957 18.9137 17.6206 19.1373 17.3952 19.3014C17.1699 19.4655 16.9033 19.5635 16.6253 19.5845C16.3473 19.6055 16.069 19.5487 15.8216 19.4203L13.2716 18.0603C13.0556 17.9473 12.8154 17.8882 12.5716 17.8882C12.3278 17.8882 12.0876 17.9473 11.8716 18.0603L9.32157 19.4003C9.07413 19.5287 8.79582 19.5855 8.51785 19.5645C8.23989 19.5435 7.97328 19.4455 7.74793 19.2814C7.52258 19.1173 7.34741 18.8937 7.24207 18.6356C7.13673 18.3775 7.10539 18.0952 7.15157 17.8203L7.63157 15.0003C7.67413 14.7603 7.65718 14.5136 7.58221 14.2817C7.50724 14.0499 7.37655 13.8399 7.20157 13.6703L5.14157 11.6703C4.93172 11.4764 4.78159 11.2267 4.70885 10.9504C4.63612 10.6741 4.64379 10.3828 4.73098 10.1107C4.81817 9.83865 4.98124 9.59714 5.20102 9.4146C5.42079 9.23206 5.68813 9.11608 5.97157 9.0803L8.82157 8.6703C9.0623 8.63547 9.29094 8.54263 9.48779 8.39978C9.68465 8.25693 9.84382 8.06835 9.95157 7.8503L11.2216 5.2603C11.3471 5.00978 11.5399 4.79914 11.7783 4.65193C12.0167 4.50472 12.2914 4.42676 12.5716 4.42676C12.8518 4.42676 13.1265 4.50472 13.3649 4.65193C13.6033 4.79914 13.796 5.00978 13.9216 5.2603Z" fill="#F7B32B"/>
</svg>
</li>
              <li>
<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9216 5.2603L15.1916 7.8503C15.2993 8.06835 15.4585 8.25693 15.6554 8.39978C15.8522 8.54263 16.0809 8.63547 16.3216 8.6703L19.1716 9.0803C19.4487 9.12054 19.7091 9.23759 19.9232 9.41817C20.1373 9.59876 20.2965 9.83568 20.3829 10.1021C20.4693 10.3685 20.4794 10.6538 20.412 10.9257C20.3446 11.1975 20.2024 11.4451 20.0016 11.6403L17.9416 13.6403C17.7619 13.8129 17.6284 14.0279 17.5533 14.2655C17.4781 14.5031 17.4638 14.7557 17.5116 15.0003L17.9916 17.8403C18.0378 18.1152 18.0064 18.3975 17.9011 18.6556C17.7957 18.9137 17.6206 19.1373 17.3952 19.3014C17.1699 19.4655 16.9033 19.5635 16.6253 19.5845C16.3473 19.6055 16.069 19.5487 15.8216 19.4203L13.2716 18.0603C13.0556 17.9473 12.8154 17.8882 12.5716 17.8882C12.3278 17.8882 12.0876 17.9473 11.8716 18.0603L9.32157 19.4003C9.07413 19.5287 8.79582 19.5855 8.51785 19.5645C8.23989 19.5435 7.97328 19.4455 7.74793 19.2814C7.52258 19.1173 7.34741 18.8937 7.24207 18.6356C7.13673 18.3775 7.10539 18.0952 7.15157 17.8203L7.63157 15.0003C7.67413 14.7603 7.65718 14.5136 7.58221 14.2817C7.50724 14.0499 7.37655 13.8399 7.20157 13.6703L5.14157 11.6703C4.93172 11.4764 4.78159 11.2267 4.70885 10.9504C4.63612 10.6741 4.64379 10.3828 4.73098 10.1107C4.81817 9.83865 4.98124 9.59714 5.20102 9.4146C5.42079 9.23206 5.68813 9.11608 5.97157 9.0803L8.82157 8.6703C9.0623 8.63547 9.29094 8.54263 9.48779 8.39978C9.68465 8.25693 9.84382 8.06835 9.95157 7.8503L11.2216 5.2603C11.3471 5.00978 11.5399 4.79914 11.7783 4.65193C12.0167 4.50472 12.2914 4.42676 12.5716 4.42676C12.8518 4.42676 13.1265 4.50472 13.3649 4.65193C13.6033 4.79914 13.796 5.00978 13.9216 5.2603Z" fill="#F7B32B"/>
</svg>
</li>
              <li>
<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9216 5.2603L15.1916 7.8503C15.2993 8.06835 15.4585 8.25693 15.6554 8.39978C15.8522 8.54263 16.0809 8.63547 16.3216 8.6703L19.1716 9.0803C19.4487 9.12054 19.7091 9.23759 19.9232 9.41817C20.1373 9.59876 20.2965 9.83568 20.3829 10.1021C20.4693 10.3685 20.4794 10.6538 20.412 10.9257C20.3446 11.1975 20.2024 11.4451 20.0016 11.6403L17.9416 13.6403C17.7619 13.8129 17.6284 14.0279 17.5533 14.2655C17.4781 14.5031 17.4638 14.7557 17.5116 15.0003L17.9916 17.8403C18.0378 18.1152 18.0064 18.3975 17.9011 18.6556C17.7957 18.9137 17.6206 19.1373 17.3952 19.3014C17.1699 19.4655 16.9033 19.5635 16.6253 19.5845C16.3473 19.6055 16.069 19.5487 15.8216 19.4203L13.2716 18.0603C13.0556 17.9473 12.8154 17.8882 12.5716 17.8882C12.3278 17.8882 12.0876 17.9473 11.8716 18.0603L9.32157 19.4003C9.07413 19.5287 8.79582 19.5855 8.51785 19.5645C8.23989 19.5435 7.97328 19.4455 7.74793 19.2814C7.52258 19.1173 7.34741 18.8937 7.24207 18.6356C7.13673 18.3775 7.10539 18.0952 7.15157 17.8203L7.63157 15.0003C7.67413 14.7603 7.65718 14.5136 7.58221 14.2817C7.50724 14.0499 7.37655 13.8399 7.20157 13.6703L5.14157 11.6703C4.93172 11.4764 4.78159 11.2267 4.70885 10.9504C4.63612 10.6741 4.64379 10.3828 4.73098 10.1107C4.81817 9.83865 4.98124 9.59714 5.20102 9.4146C5.42079 9.23206 5.68813 9.11608 5.97157 9.0803L8.82157 8.6703C9.0623 8.63547 9.29094 8.54263 9.48779 8.39978C9.68465 8.25693 9.84382 8.06835 9.95157 7.8503L11.2216 5.2603C11.3471 5.00978 11.5399 4.79914 11.7783 4.65193C12.0167 4.50472 12.2914 4.42676 12.5716 4.42676C12.8518 4.42676 13.1265 4.50472 13.3649 4.65193C13.6033 4.79914 13.796 5.00978 13.9216 5.2603Z" fill="#F7B32B"/>
</svg>
</li>
              <li>
<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9216 5.2603L15.1916 7.8503C15.2993 8.06835 15.4585 8.25693 15.6554 8.39978C15.8522 8.54263 16.0809 8.63547 16.3216 8.6703L19.1716 9.0803C19.4487 9.12054 19.7091 9.23759 19.9232 9.41817C20.1373 9.59876 20.2965 9.83568 20.3829 10.1021C20.4693 10.3685 20.4794 10.6538 20.412 10.9257C20.3446 11.1975 20.2024 11.4451 20.0016 11.6403L17.9416 13.6403C17.7619 13.8129 17.6284 14.0279 17.5533 14.2655C17.4781 14.5031 17.4638 14.7557 17.5116 15.0003L17.9916 17.8403C18.0378 18.1152 18.0064 18.3975 17.9011 18.6556C17.7957 18.9137 17.6206 19.1373 17.3952 19.3014C17.1699 19.4655 16.9033 19.5635 16.6253 19.5845C16.3473 19.6055 16.069 19.5487 15.8216 19.4203L13.2716 18.0603C13.0556 17.9473 12.8154 17.8882 12.5716 17.8882C12.3278 17.8882 12.0876 17.9473 11.8716 18.0603L9.32157 19.4003C9.07413 19.5287 8.79582 19.5855 8.51785 19.5645C8.23989 19.5435 7.97328 19.4455 7.74793 19.2814C7.52258 19.1173 7.34741 18.8937 7.24207 18.6356C7.13673 18.3775 7.10539 18.0952 7.15157 17.8203L7.63157 15.0003C7.67413 14.7603 7.65718 14.5136 7.58221 14.2817C7.50724 14.0499 7.37655 13.8399 7.20157 13.6703L5.14157 11.6703C4.93172 11.4764 4.78159 11.2267 4.70885 10.9504C4.63612 10.6741 4.64379 10.3828 4.73098 10.1107C4.81817 9.83865 4.98124 9.59714 5.20102 9.4146C5.42079 9.23206 5.68813 9.11608 5.97157 9.0803L8.82157 8.6703C9.0623 8.63547 9.29094 8.54263 9.48779 8.39978C9.68465 8.25693 9.84382 8.06835 9.95157 7.8503L11.2216 5.2603C11.3471 5.00978 11.5399 4.79914 11.7783 4.65193C12.0167 4.50472 12.2914 4.42676 12.5716 4.42676C12.8518 4.42676 13.1265 4.50472 13.3649 4.65193C13.6033 4.79914 13.796 5.00978 13.9216 5.2603Z" fill="#F7B32B"/>
</svg>
</li>
              <li>
<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9216 5.2603L15.1916 7.8503C15.2993 8.06835 15.4585 8.25693 15.6554 8.39978C15.8522 8.54263 16.0809 8.63547 16.3216 8.6703L19.1716 9.0803C19.4487 9.12054 19.7091 9.23759 19.9232 9.41817C20.1373 9.59876 20.2965 9.83568 20.3829 10.1021C20.4693 10.3685 20.4794 10.6538 20.412 10.9257C20.3446 11.1975 20.2024 11.4451 20.0016 11.6403L17.9416 13.6403C17.7619 13.8129 17.6284 14.0279 17.5533 14.2655C17.4781 14.5031 17.4638 14.7557 17.5116 15.0003L17.9916 17.8403C18.0378 18.1152 18.0064 18.3975 17.9011 18.6556C17.7957 18.9137 17.6206 19.1373 17.3952 19.3014C17.1699 19.4655 16.9033 19.5635 16.6253 19.5845C16.3473 19.6055 16.069 19.5487 15.8216 19.4203L13.2716 18.0603C13.0556 17.9473 12.8154 17.8882 12.5716 17.8882C12.3278 17.8882 12.0876 17.9473 11.8716 18.0603L9.32157 19.4003C9.07413 19.5287 8.79582 19.5855 8.51785 19.5645C8.23989 19.5435 7.97328 19.4455 7.74793 19.2814C7.52258 19.1173 7.34741 18.8937 7.24207 18.6356C7.13673 18.3775 7.10539 18.0952 7.15157 17.8203L7.63157 15.0003C7.67413 14.7603 7.65718 14.5136 7.58221 14.2817C7.50724 14.0499 7.37655 13.8399 7.20157 13.6703L5.14157 11.6703C4.93172 11.4764 4.78159 11.2267 4.70885 10.9504C4.63612 10.6741 4.64379 10.3828 4.73098 10.1107C4.81817 9.83865 4.98124 9.59714 5.20102 9.4146C5.42079 9.23206 5.68813 9.11608 5.97157 9.0803L8.82157 8.6703C9.0623 8.63547 9.29094 8.54263 9.48779 8.39978C9.68465 8.25693 9.84382 8.06835 9.95157 7.8503L11.2216 5.2603C11.3471 5.00978 11.5399 4.79914 11.7783 4.65193C12.0167 4.50472 12.2914 4.42676 12.5716 4.42676C12.8518 4.42676 13.1265 4.50472 13.3649 4.65193C13.6033 4.79914 13.796 5.00978 13.9216 5.2603Z" fill="#F7B32B"/>
</svg>
</li>
            </ul>


<div className='flex sm:flex-col flex-col-reverse'>
            <div className='flex justify-between items-center mt-2'>
<div className='flex gap-4 items-center'>
  <p className='text-[#8E8E8E] text-[28px] font-[500]'>₤9.00 </p>
  <hr className='border-[#8E8E8E] border-1 absolute w-[77px] '/>
  <p className='text-black text-[28px] font-[500]'>₤6.50</p>
</div>
<div className='flex items-center border-1 rounded-[4px] font-[600]'>
  <button className='px-2 py-1 hover:bg-[#DA0025] hover:text-white hover:border-[#DA0025]'>-</button>
  <p className='px-2 py-1 border-x-1 '>1</p>
  <button className='px-2 py-1 hover:bg-[#DA0025] hover:text-white hover:border-[#DA0025]'>+</button>
</div>
            </div>

            <p className='text-[18px] text-[#787878] mt-3'>Special mix of mango, peach, strawberry, pineapple, passion 
fruit, and orange. Cras dapibus. Vivamus elementum semper 
nisi. Aenean vulputate.</p>
</div>
<ul className='mt-3'>
  <li className='mb-2 text-[#787878] font-[500]  sm:block hidden'>SKU: PT020</li>
  <li className='mb-2 text-[#787878] font-[500]'>Categories: Drinks, Tea</li>
  <li className='text-[#787878] font-[500]'>Tags: Fast food , Burger</li>
</ul>

<div className='sm:flex gap-4 items-center mt-5 hidden'>
  <button className='w-[60%] bg-[#DA0025] rounded-full px-2 py-3 text-white flex gap-1 items-center justify-center text-center font-[600]'>
    
<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.2565 6.19251C18.1798 6.08174 18.0775 5.9912 17.9582 5.92864C17.8389 5.86609 17.7062 5.83339 17.5715 5.83334H6.18233L5.22066 3.52501C5.09494 3.22077 4.88151 2.96082 4.60756 2.77829C4.3336 2.59575 4.01152 2.49888 3.68233 2.50001H1.73816V4.16668H3.68233L7.63566 13.6542C7.69898 13.806 7.80581 13.9356 7.94268 14.0268C8.07955 14.118 8.24035 14.1667 8.40483 14.1667H15.0715C15.419 14.1667 15.7298 13.9508 15.8523 13.6267L18.3523 6.96001C18.3996 6.83386 18.4155 6.69814 18.3988 6.56447C18.3822 6.4308 18.3333 6.30317 18.2565 6.19251Z" fill="white"/>
<path d="M8.82153 17.5C9.51189 17.5 10.0715 16.9404 10.0715 16.25C10.0715 15.5596 9.51189 15 8.82153 15C8.13118 15 7.57153 15.5596 7.57153 16.25C7.57153 16.9404 8.13118 17.5 8.82153 17.5Z" fill="white"/>
<path d="M14.6549 17.5C15.3453 17.5 15.9049 16.9404 15.9049 16.25C15.9049 15.5596 15.3453 15 14.6549 15C13.9646 15 13.4049 15.5596 13.4049 16.25C13.4049 16.9404 13.9646 17.5 14.6549 17.5Z" fill="white"/>
</svg>

Add to Cart
    </button>
</div>

          </div>
        </div>
        
        <TabsLgBasic />

        <div className='my-10'>
<h2 className='text-black font-[400] sm:text-[60px] text-[32px]'>
You May Also Like
</h2>
<div className='grid sm:grid-cols-4 gap-5 grid-cols-1 mt-6'>



<div className='bg-white p-3 rounded-[12px] border-[1px] border-[#E3E3E3] hover:border-[#DA0025] '>
<img className="w-full" src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742378693/Mask_group_d848ot.png" alt="" />
<div className='mt-4'>
<div className='flex justify-between items-center'>
<p className='sm:text-[20px] font-[600]'>Chicken Wraps Recipe</p>
<p className='text-[16px] font-[600] flex gap-2 items-center'>

<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.75174 1.25981L10.9648 3.84981C11.0677 4.06786 11.2198 4.25644 11.4078 4.39929C11.5958 4.54215 11.8142 4.63498 12.0442 4.66981L14.7664 5.07981C15.0311 5.12005 15.2798 5.2371 15.4843 5.41769C15.6888 5.59828 15.8409 5.83519 15.9234 6.10162C16.0059 6.36805 16.0155 6.65334 15.9512 6.92519C15.8868 7.19703 15.751 7.44459 15.5592 7.63981L13.5915 9.63981C13.4199 9.81246 13.2924 10.0274 13.2206 10.265C13.1489 10.5026 13.1352 10.7552 13.1808 10.9998L13.6393 13.8398C13.6834 14.1147 13.6535 14.397 13.5529 14.6551C13.4522 14.9132 13.2849 15.1368 13.0697 15.3009C12.8544 15.465 12.5998 15.563 12.3343 15.584C12.0688 15.605 11.8029 15.5482 11.5666 15.4198L9.13087 14.0598C8.92454 13.9468 8.69513 13.8878 8.46225 13.8878C8.22938 13.8878 7.99997 13.9468 7.79363 14.0598L5.35794 15.3998C5.12159 15.5282 4.85575 15.585 4.59025 15.564C4.32475 15.543 4.07009 15.445 3.85484 15.2809C3.63959 15.1168 3.47227 14.8932 3.37166 14.6351C3.27104 14.377 3.24111 14.0947 3.28522 13.8198L3.7437 10.9998C3.78435 10.7599 3.76816 10.5131 3.69655 10.2813C3.62494 10.0494 3.50011 9.83943 3.33298 9.66981L1.36532 7.66981C1.16487 7.47594 1.02148 7.22618 0.951999 6.9499C0.882522 6.67361 0.889854 6.3823 0.973133 6.11024C1.05641 5.83817 1.21218 5.59666 1.4221 5.41411C1.63202 5.23157 1.88737 5.11559 2.15812 5.07981L4.88036 4.66981C5.11029 4.63498 5.32868 4.54215 5.51671 4.39929C5.70474 4.25644 5.85678 4.06786 5.9597 3.84981L7.17277 1.25981C7.29267 1.0093 7.47679 0.798652 7.70452 0.651443C7.93225 0.504235 8.19461 0.42627 8.46225 0.42627C8.7299 0.42627 8.99226 0.504235 9.21999 0.651443C9.44772 0.798652 9.63184 1.0093 9.75174 1.25981Z" fill="#F7B32B"/>
</svg>
4.2
</p>
</div>

<p className='mt-2 text-[14px] font-[400] text-[#535353]'>Lorem Ipsum is simply dummy text of the printing
and typesetting industry.</p>

<p className='font-[600] sm:mt-5 mt-2'>₤50.00</p>

<div className='flex items-center justify-between sm:gap-3 sm:mt-6 mt-3'>

  <button className="cursor-pointer text-white flex gap-2 items-center bg-[#DA0025] p-2 justify-center rounded-full w-[100%]">   
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.1848 6.19251C18.1082 6.08174 18.0058 5.9912 17.8865 5.92864C17.7672 5.86609 17.6345 5.83339 17.4998 5.83334H6.11067L5.149 3.52501C5.02328 3.22077 4.80985 2.96082 4.5359 2.77829C4.26195 2.59575 3.93987 2.49888 3.61067 2.50001H1.6665V4.16668H3.61067L7.564 13.6542C7.62733 13.806 7.73415 13.9356 7.87102 14.0268C8.0079 14.118 8.1687 14.1667 8.33317 14.1667H14.9998C15.3473 14.1667 15.6582 13.9508 15.7807 13.6267L18.2807 6.96001C18.3279 6.83386 18.3439 6.69814 18.3272 6.56447C18.3105 6.4308 18.2617 6.30317 18.1848 6.19251Z" fill="white"/>
<path d="M8.75 17.5C9.44036 17.5 10 16.9404 10 16.25C10 15.5596 9.44036 15 8.75 15C8.05964 15 7.5 15.5596 7.5 16.25C7.5 16.9404 8.05964 17.5 8.75 17.5Z" fill="white"/>
<path d="M14.5835 17.5C15.2739 17.5 15.8335 16.9404 15.8335 16.25C15.8335 15.5596 15.2739 15 14.5835 15C13.8931 15 13.3335 15.5596 13.3335 16.25C13.3335 16.9404 13.8931 17.5 14.5835 17.5Z" fill="white"/>
</svg>
 Add to Cart
  </button>



</div>
</div>
</div>
<div className='bg-white p-3 rounded-[12px] border-[1px] border-[#E3E3E3] hover:border-[#DA0025] '>
<img className="w-full" src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742378693/Mask_group_d848ot.png" alt="" />
<div className='mt-4'>
<div className='flex justify-between items-center'>
<p className='sm:text-[20px] font-[600]'>Chicken Wraps Recipe</p>
<p className='text-[16px] font-[600] flex gap-2 items-center'>

<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.75174 1.25981L10.9648 3.84981C11.0677 4.06786 11.2198 4.25644 11.4078 4.39929C11.5958 4.54215 11.8142 4.63498 12.0442 4.66981L14.7664 5.07981C15.0311 5.12005 15.2798 5.2371 15.4843 5.41769C15.6888 5.59828 15.8409 5.83519 15.9234 6.10162C16.0059 6.36805 16.0155 6.65334 15.9512 6.92519C15.8868 7.19703 15.751 7.44459 15.5592 7.63981L13.5915 9.63981C13.4199 9.81246 13.2924 10.0274 13.2206 10.265C13.1489 10.5026 13.1352 10.7552 13.1808 10.9998L13.6393 13.8398C13.6834 14.1147 13.6535 14.397 13.5529 14.6551C13.4522 14.9132 13.2849 15.1368 13.0697 15.3009C12.8544 15.465 12.5998 15.563 12.3343 15.584C12.0688 15.605 11.8029 15.5482 11.5666 15.4198L9.13087 14.0598C8.92454 13.9468 8.69513 13.8878 8.46225 13.8878C8.22938 13.8878 7.99997 13.9468 7.79363 14.0598L5.35794 15.3998C5.12159 15.5282 4.85575 15.585 4.59025 15.564C4.32475 15.543 4.07009 15.445 3.85484 15.2809C3.63959 15.1168 3.47227 14.8932 3.37166 14.6351C3.27104 14.377 3.24111 14.0947 3.28522 13.8198L3.7437 10.9998C3.78435 10.7599 3.76816 10.5131 3.69655 10.2813C3.62494 10.0494 3.50011 9.83943 3.33298 9.66981L1.36532 7.66981C1.16487 7.47594 1.02148 7.22618 0.951999 6.9499C0.882522 6.67361 0.889854 6.3823 0.973133 6.11024C1.05641 5.83817 1.21218 5.59666 1.4221 5.41411C1.63202 5.23157 1.88737 5.11559 2.15812 5.07981L4.88036 4.66981C5.11029 4.63498 5.32868 4.54215 5.51671 4.39929C5.70474 4.25644 5.85678 4.06786 5.9597 3.84981L7.17277 1.25981C7.29267 1.0093 7.47679 0.798652 7.70452 0.651443C7.93225 0.504235 8.19461 0.42627 8.46225 0.42627C8.7299 0.42627 8.99226 0.504235 9.21999 0.651443C9.44772 0.798652 9.63184 1.0093 9.75174 1.25981Z" fill="#F7B32B"/>
</svg>
4.2
</p>
</div>

<p className='mt-2 text-[14px] font-[400] text-[#535353]'>Lorem Ipsum is simply dummy text of the printing
and typesetting industry.</p>

<p className='font-[600] sm:mt-5 mt-2'>₤50.00</p>

<div className='flex items-center justify-between sm:gap-3 sm:mt-6 mt-3'>

  <button className="cursor-pointer text-white flex gap-2 items-center bg-[#DA0025] p-2 justify-center rounded-full w-[100%]">   
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.1848 6.19251C18.1082 6.08174 18.0058 5.9912 17.8865 5.92864C17.7672 5.86609 17.6345 5.83339 17.4998 5.83334H6.11067L5.149 3.52501C5.02328 3.22077 4.80985 2.96082 4.5359 2.77829C4.26195 2.59575 3.93987 2.49888 3.61067 2.50001H1.6665V4.16668H3.61067L7.564 13.6542C7.62733 13.806 7.73415 13.9356 7.87102 14.0268C8.0079 14.118 8.1687 14.1667 8.33317 14.1667H14.9998C15.3473 14.1667 15.6582 13.9508 15.7807 13.6267L18.2807 6.96001C18.3279 6.83386 18.3439 6.69814 18.3272 6.56447C18.3105 6.4308 18.2617 6.30317 18.1848 6.19251Z" fill="white"/>
<path d="M8.75 17.5C9.44036 17.5 10 16.9404 10 16.25C10 15.5596 9.44036 15 8.75 15C8.05964 15 7.5 15.5596 7.5 16.25C7.5 16.9404 8.05964 17.5 8.75 17.5Z" fill="white"/>
<path d="M14.5835 17.5C15.2739 17.5 15.8335 16.9404 15.8335 16.25C15.8335 15.5596 15.2739 15 14.5835 15C13.8931 15 13.3335 15.5596 13.3335 16.25C13.3335 16.9404 13.8931 17.5 14.5835 17.5Z" fill="white"/>
</svg>
 Add to Cart
  </button>



</div>
</div>
</div>
<div className='bg-white p-3 rounded-[12px] border-[1px] border-[#E3E3E3] hover:border-[#DA0025] '>
<img className="w-full" src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742378693/Mask_group_d848ot.png" alt="" />
<div className='mt-4'>
<div className='flex justify-between items-center'>
<p className='sm:text-[20px] font-[600]'>Chicken Wraps Recipe</p>
<p className='text-[16px] font-[600] flex gap-2 items-center'>

<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.75174 1.25981L10.9648 3.84981C11.0677 4.06786 11.2198 4.25644 11.4078 4.39929C11.5958 4.54215 11.8142 4.63498 12.0442 4.66981L14.7664 5.07981C15.0311 5.12005 15.2798 5.2371 15.4843 5.41769C15.6888 5.59828 15.8409 5.83519 15.9234 6.10162C16.0059 6.36805 16.0155 6.65334 15.9512 6.92519C15.8868 7.19703 15.751 7.44459 15.5592 7.63981L13.5915 9.63981C13.4199 9.81246 13.2924 10.0274 13.2206 10.265C13.1489 10.5026 13.1352 10.7552 13.1808 10.9998L13.6393 13.8398C13.6834 14.1147 13.6535 14.397 13.5529 14.6551C13.4522 14.9132 13.2849 15.1368 13.0697 15.3009C12.8544 15.465 12.5998 15.563 12.3343 15.584C12.0688 15.605 11.8029 15.5482 11.5666 15.4198L9.13087 14.0598C8.92454 13.9468 8.69513 13.8878 8.46225 13.8878C8.22938 13.8878 7.99997 13.9468 7.79363 14.0598L5.35794 15.3998C5.12159 15.5282 4.85575 15.585 4.59025 15.564C4.32475 15.543 4.07009 15.445 3.85484 15.2809C3.63959 15.1168 3.47227 14.8932 3.37166 14.6351C3.27104 14.377 3.24111 14.0947 3.28522 13.8198L3.7437 10.9998C3.78435 10.7599 3.76816 10.5131 3.69655 10.2813C3.62494 10.0494 3.50011 9.83943 3.33298 9.66981L1.36532 7.66981C1.16487 7.47594 1.02148 7.22618 0.951999 6.9499C0.882522 6.67361 0.889854 6.3823 0.973133 6.11024C1.05641 5.83817 1.21218 5.59666 1.4221 5.41411C1.63202 5.23157 1.88737 5.11559 2.15812 5.07981L4.88036 4.66981C5.11029 4.63498 5.32868 4.54215 5.51671 4.39929C5.70474 4.25644 5.85678 4.06786 5.9597 3.84981L7.17277 1.25981C7.29267 1.0093 7.47679 0.798652 7.70452 0.651443C7.93225 0.504235 8.19461 0.42627 8.46225 0.42627C8.7299 0.42627 8.99226 0.504235 9.21999 0.651443C9.44772 0.798652 9.63184 1.0093 9.75174 1.25981Z" fill="#F7B32B"/>
</svg>
4.2
</p>
</div>

<p className='mt-2 text-[14px] font-[400] text-[#535353]'>Lorem Ipsum is simply dummy text of the printing
and typesetting industry.</p>

<p className='font-[600] sm:mt-5 mt-2'>₤50.00</p>

<div className='flex items-center justify-between sm:gap-3 sm:mt-6 mt-3'>

  <button className="cursor-pointer text-white flex gap-2 items-center bg-[#DA0025] p-2 justify-center rounded-full w-[100%]">   
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.1848 6.19251C18.1082 6.08174 18.0058 5.9912 17.8865 5.92864C17.7672 5.86609 17.6345 5.83339 17.4998 5.83334H6.11067L5.149 3.52501C5.02328 3.22077 4.80985 2.96082 4.5359 2.77829C4.26195 2.59575 3.93987 2.49888 3.61067 2.50001H1.6665V4.16668H3.61067L7.564 13.6542C7.62733 13.806 7.73415 13.9356 7.87102 14.0268C8.0079 14.118 8.1687 14.1667 8.33317 14.1667H14.9998C15.3473 14.1667 15.6582 13.9508 15.7807 13.6267L18.2807 6.96001C18.3279 6.83386 18.3439 6.69814 18.3272 6.56447C18.3105 6.4308 18.2617 6.30317 18.1848 6.19251Z" fill="white"/>
<path d="M8.75 17.5C9.44036 17.5 10 16.9404 10 16.25C10 15.5596 9.44036 15 8.75 15C8.05964 15 7.5 15.5596 7.5 16.25C7.5 16.9404 8.05964 17.5 8.75 17.5Z" fill="white"/>
<path d="M14.5835 17.5C15.2739 17.5 15.8335 16.9404 15.8335 16.25C15.8335 15.5596 15.2739 15 14.5835 15C13.8931 15 13.3335 15.5596 13.3335 16.25C13.3335 16.9404 13.8931 17.5 14.5835 17.5Z" fill="white"/>
</svg>
 Add to Cart
  </button>



</div>
</div>
</div>
<div className='bg-white p-3 rounded-[12px] border-[1px] border-[#E3E3E3] hover:border-[#DA0025] '>
<img className="w-full" src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742378693/Mask_group_d848ot.png" alt="" />
<div className='mt-4'>
<div className='flex justify-between items-center'>
<p className='sm:text-[20px] font-[600]'>Chicken Wraps Recipe</p>
<p className='text-[16px] font-[600] flex gap-2 items-center'>

<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.75174 1.25981L10.9648 3.84981C11.0677 4.06786 11.2198 4.25644 11.4078 4.39929C11.5958 4.54215 11.8142 4.63498 12.0442 4.66981L14.7664 5.07981C15.0311 5.12005 15.2798 5.2371 15.4843 5.41769C15.6888 5.59828 15.8409 5.83519 15.9234 6.10162C16.0059 6.36805 16.0155 6.65334 15.9512 6.92519C15.8868 7.19703 15.751 7.44459 15.5592 7.63981L13.5915 9.63981C13.4199 9.81246 13.2924 10.0274 13.2206 10.265C13.1489 10.5026 13.1352 10.7552 13.1808 10.9998L13.6393 13.8398C13.6834 14.1147 13.6535 14.397 13.5529 14.6551C13.4522 14.9132 13.2849 15.1368 13.0697 15.3009C12.8544 15.465 12.5998 15.563 12.3343 15.584C12.0688 15.605 11.8029 15.5482 11.5666 15.4198L9.13087 14.0598C8.92454 13.9468 8.69513 13.8878 8.46225 13.8878C8.22938 13.8878 7.99997 13.9468 7.79363 14.0598L5.35794 15.3998C5.12159 15.5282 4.85575 15.585 4.59025 15.564C4.32475 15.543 4.07009 15.445 3.85484 15.2809C3.63959 15.1168 3.47227 14.8932 3.37166 14.6351C3.27104 14.377 3.24111 14.0947 3.28522 13.8198L3.7437 10.9998C3.78435 10.7599 3.76816 10.5131 3.69655 10.2813C3.62494 10.0494 3.50011 9.83943 3.33298 9.66981L1.36532 7.66981C1.16487 7.47594 1.02148 7.22618 0.951999 6.9499C0.882522 6.67361 0.889854 6.3823 0.973133 6.11024C1.05641 5.83817 1.21218 5.59666 1.4221 5.41411C1.63202 5.23157 1.88737 5.11559 2.15812 5.07981L4.88036 4.66981C5.11029 4.63498 5.32868 4.54215 5.51671 4.39929C5.70474 4.25644 5.85678 4.06786 5.9597 3.84981L7.17277 1.25981C7.29267 1.0093 7.47679 0.798652 7.70452 0.651443C7.93225 0.504235 8.19461 0.42627 8.46225 0.42627C8.7299 0.42627 8.99226 0.504235 9.21999 0.651443C9.44772 0.798652 9.63184 1.0093 9.75174 1.25981Z" fill="#F7B32B"/>
</svg>
4.2
</p>
</div>

<p className='mt-2 text-[14px] font-[400] text-[#535353]'>Lorem Ipsum is simply dummy text of the printing
and typesetting industry.</p>

<p className='font-[600] sm:mt-5 mt-2'>₤50.00</p>

<div className='flex items-center justify-between sm:gap-3 sm:mt-6 mt-3'>

  <button className="cursor-pointer text-white flex gap-2 items-center bg-[#DA0025] p-2 justify-center rounded-full w-[100%]">   
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.1848 6.19251C18.1082 6.08174 18.0058 5.9912 17.8865 5.92864C17.7672 5.86609 17.6345 5.83339 17.4998 5.83334H6.11067L5.149 3.52501C5.02328 3.22077 4.80985 2.96082 4.5359 2.77829C4.26195 2.59575 3.93987 2.49888 3.61067 2.50001H1.6665V4.16668H3.61067L7.564 13.6542C7.62733 13.806 7.73415 13.9356 7.87102 14.0268C8.0079 14.118 8.1687 14.1667 8.33317 14.1667H14.9998C15.3473 14.1667 15.6582 13.9508 15.7807 13.6267L18.2807 6.96001C18.3279 6.83386 18.3439 6.69814 18.3272 6.56447C18.3105 6.4308 18.2617 6.30317 18.1848 6.19251Z" fill="white"/>
<path d="M8.75 17.5C9.44036 17.5 10 16.9404 10 16.25C10 15.5596 9.44036 15 8.75 15C8.05964 15 7.5 15.5596 7.5 16.25C7.5 16.9404 8.05964 17.5 8.75 17.5Z" fill="white"/>
<path d="M14.5835 17.5C15.2739 17.5 15.8335 16.9404 15.8335 16.25C15.8335 15.5596 15.2739 15 14.5835 15C13.8931 15 13.3335 15.5596 13.3335 16.25C13.3335 16.9404 13.8931 17.5 14.5835 17.5Z" fill="white"/>
</svg>
 Add to Cart
  </button>



</div>
</div>
</div>
</div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ProductDetail
