import React from 'react'

const Counter = () => {
    return (
        <>
            <section className='bg-[#FFF7E7] pt-44'>
                <div className='max-w-container justify-between items-center flex mx-auto '>
                    <div className='text-center '>
                        <svg className=' mx-auto' width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35.7001 49.2V43.8H30.3001V49.2H35.7001ZM38.4001 49.2H27.6001V42.8782C22.0625 40.9209 17.9068 36.0382 16.9898 30.087C10.7335 29.0114 6.00012 23.9896 6.00012 17.9571V11.4C6.00012 9.90883 7.20895 8.7 8.70012 8.7H16.8001C16.8001 7.20883 18.009 6 19.5001 6H46.5001C47.9913 6 49.2001 7.20883 49.2001 8.7H57.3001C58.7913 8.7 60.0001 9.90883 60.0001 11.4V17.9571C60.0001 23.9896 55.2667 29.0114 49.0104 30.087C48.0935 36.0382 43.9378 40.9209 38.4001 42.8782V49.2ZM19.5001 8.7V27.6C19.5001 35.0558 25.5443 41.1 33.0001 41.1C40.456 41.1 46.5001 35.0558 46.5001 27.6V8.7H19.5001ZM57.3001 17.9571V11.4H49.2001V27.2967C53.8865 26.2201 57.3001 22.4079 57.3001 17.9571ZM16.8001 11.4H8.70012V17.9571C8.70012 22.4079 12.1138 26.2201 16.8001 27.2967V11.4Z" fill="#222132" />
                            <path d="M43.8001 49.2C45.2913 49.2 46.5001 49.9117 46.5001 51.9V57.3C46.5001 59.2882 45.2913 60 43.8001 60H22.2001C20.709 60 19.5001 59.2882 19.5001 57.3V51.9C19.5001 49.9117 20.709 49.2 22.2001 49.2H43.8001ZM22.2001 57.3H43.8001V51.9H22.2001V57.3Z" fill="#222132" />
                        </svg>
                        <h1 className=' font-Raleway font-extrabold	text-primary text-[39px] pt-5 '>26+</h1>
                        <p className='text-5 font-bold	' >Awards  won</p>
                    </div>
                    <div className='text-center '>
                        <svg className=' mx-auto' width="49" height="50" viewBox="0 0 49 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30.3333 9.19532L16.3333 3.11003V40.4493C16.524 40.4324 16.718 40.4626 16.8975 40.5399L30.3333 46.3285V9.19532ZM32.6667 10.1113V47.3338L46.6667 40.8653V3.76898L33.1728 10.0038C33.0125 10.0779 32.8394 10.1138 32.6667 10.1113ZM14.001 4.20676L2.33333 9.69332V46.7931L14.0745 41.4105C14.0264 41.2826 14 41.1441 14 40.9994V4.2767C14 4.2533 14.0003 4.22999 14.001 4.20676ZM1.65286 49.6719C0.880064 50.0262 0 49.4615 0 48.6114V8.94474C0 8.4886 0.265833 8.0743 0.680477 7.88421L15.8324 0.77282C16.1326 0.635218 16.477 0.631249 16.7802 0.761897L32.6668 7.66724L47.344 0.88566C48.1171 0.528449 49 1.0931 49 1.94474V41.6114C49 42.0663 48.7356 42.4797 48.3227 42.6705L33.1728 49.6705C32.872 49.8095 32.5262 49.814 32.2219 49.6829L16.4506 42.8881L1.65286 49.6719Z" fill="#222132" />
                        </svg>

                        <h1 className=' font-Raleway font-extrabold	text-primary text-[39px] pt-5 '>65+</h1>
                        <p className='text-5 font-bold	' >Awards  won</p>
                    </div>
                    <div className='text-center '>
                        <svg className='mx-auto' width="41" height="49" viewBox="0 0 41 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_301_450)">
                                <path d="M21.3431 36.5557V47.831C21.3431 48.4753 20.8122 48.9976 20.1574 48.9976C19.5025 48.9976 18.9716 48.4753 18.9716 47.831V36.5555L12.0945 27.5334C11.7016 27.0179 11.8078 26.2867 12.3316 25.9001C12.8555 25.5135 13.5987 25.6179 13.9917 26.1334L20.1574 34.2223L26.3232 26.1334C26.7161 25.6179 27.4593 25.5135 27.9832 25.9001C28.5071 26.2867 28.6133 27.0179 28.2204 27.5334L21.3431 36.5557ZM15.5328 10.0227C13.5005 12.6425 11.0781 14.0022 8.30017 14.0024C7.64531 14.0024 7.11441 13.4801 7.11438 12.8358C7.11435 12.1914 7.64518 11.6691 8.30004 11.669C10.5844 11.6689 12.5991 10.3438 14.3962 7.54376C14.8368 6.85722 15.8377 6.81248 16.3398 7.45689C18.6733 10.452 23.7631 11.159 31.7469 9.33821C32.3848 9.19272 33.0218 9.58362 33.1697 10.2113C33.3176 10.839 32.9203 11.4658 32.2823 11.6113C24.4283 13.4025 18.8124 12.9299 15.5328 10.0227ZM27.2723 39.669C26.6174 39.6693 26.0863 39.1473 26.086 38.5029C26.0856 37.8586 26.6162 37.336 27.2711 37.3357L32.014 37.3333C32.6689 37.333 33.2 37.8551 33.2003 38.4994C33.2007 39.1437 32.6701 39.6663 32.0152 39.6667L27.2723 39.669Z" fill="#222132" />
                                <path d="M13.0531 25.7958C8.45101 28.0177 2.37145 34.9286 2.37145 38.5497V44.6335C2.37145 45.6271 2.37145 45.9993 2.37145 46.5815L37.9432 46.6234C37.9432 46.4155 37.9432 46.1778 37.9432 45.7761V38.5497C37.9432 35.1782 31.6517 28.153 27.3062 25.7627C25.3877 27.1925 23.0034 28 20.1573 28C17.3333 28 14.9639 27.205 13.0531 25.7958ZM11.2255 24.1098C8.4911 20.9919 7.11435 16.2466 7.11435 10.7917C7.11435 3.57366 12.1582 0 20.1573 0C28.1564 0 33.2003 3.57366 33.2003 10.7917C33.2003 16.2388 31.8275 20.9783 29.1009 24.0964C34.0482 27.1211 40.3147 34.3231 40.3147 38.5497V47.7482C40.3147 48.3925 39.7838 48.9149 39.1289 48.9149H1.18573C0.530867 48.9149 0 48.3925 0 47.7482V38.5497C0 34.1155 6.03276 27.0127 11.2255 24.1098ZM20.1573 25.6667C27.1576 25.6667 30.8289 19.4074 30.8289 10.7917C30.8289 5.0583 26.9828 2.33333 20.1573 2.33333C13.3318 2.33333 9.4858 5.0583 9.4858 10.7917C9.4858 19.4074 13.157 25.6667 20.1573 25.6667Z" fill="#222132" />
                            </g>
                            <defs>
                                <clipPath id="clip0_301_450">
                                    <rect width="40.3147" height="49" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <h1 className=' font-Raleway font-extrabold	text-primary text-[39px] pt-5 '>689K+</h1>
                        <p className='text-5 font-bold'>Awards  won</p>
                    </div>
                    <div className='text-center '>
                        <svg className='mx-auto' width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M47.4349 16.4706V18.8235H39.204C37.2558 18.8235 35.6764 17.2434 35.6764 15.2941V10.5882C35.6764 8.63901 37.2558 7.05884 39.204 7.05884H47.4349V9.41178H39.204C38.5546 9.41178 38.0281 9.9385 38.0281 10.5882V15.2941C38.0281 15.9439 38.5546 16.4706 39.204 16.4706H47.4349ZM5.10449 15.2941C5.10449 14.6444 5.63094 14.1177 6.28034 14.1177C6.92974 14.1177 7.45618 14.6444 7.45618 15.2941V24.7059C7.45618 25.3556 6.92974 25.8824 6.28034 25.8824C5.63094 25.8824 5.10449 25.3556 5.10449 24.7059V15.2941ZM21.5663 20C21.5663 19.3503 22.0928 18.8235 22.7422 18.8235C23.3916 18.8235 23.918 19.3503 23.918 20V24.7059C23.918 25.3556 23.3916 25.8824 22.7422 25.8824C22.0928 25.8824 21.5663 25.3556 21.5663 24.7059V20ZM39.204 40C35.957 40 33.3247 37.3664 33.3247 34.1177C33.3247 30.8689 35.957 28.2353 39.204 28.2353C42.451 28.2353 45.0832 30.8689 45.0832 34.1177C45.0832 37.3664 42.451 40 39.204 40ZM39.204 37.6471C41.1522 37.6471 42.7315 36.0669 42.7315 34.1177C42.7315 32.1684 41.1522 30.5883 39.204 30.5883C37.2558 30.5883 35.6764 32.1684 35.6764 34.1177C35.6764 36.0669 37.2558 37.6471 39.204 37.6471ZM13.3354 40C10.0884 40 7.45618 37.3664 7.45618 34.1177C7.45618 30.8689 10.0884 28.2353 13.3354 28.2353C16.5824 28.2353 19.2146 30.8689 19.2146 34.1177C19.2146 37.3664 16.5824 40 13.3354 40ZM13.3354 37.6471C15.2836 37.6471 16.8629 36.0669 16.8629 34.1177C16.8629 32.1684 15.2836 30.5883 13.3354 30.5883C11.3872 30.5883 9.80787 32.1684 9.80787 34.1177C9.80787 36.0669 11.3872 37.6471 13.3354 37.6471Z" fill="#222132" />
                            <path d="M7.57379 32.9412H3.92865C1.98045 32.9412 0.401123 31.361 0.401123 29.4118V27.0588C0.401123 25.1096 1.98045 23.5294 3.92865 23.5294H28.835C28.6968 23.1454 28.6214 22.7307 28.6214 22.2981V8.89787C28.6159 9.20023 28.5692 9.50602 28.4781 9.80883L25.9586 18.1817C25.5055 19.6873 24.0706 20.7301 22.4169 20.8185L15.7918 21.1726C15.589 21.191 15.3778 21.1568 15.1778 21.0606L2.49017 14.9607C0.907013 14.2288 0.0838774 12.3971 0.514839 10.6564L2.472 2.75154C2.90323 1.0098 4.4735 -0.162231 6.19455 0.0183145L20.3651 0.000275433C20.6676 -0.00624685 20.9725 0.103309 21.2073 0.330209L26.9422 5.87156C27.9835 6.53885 28.6007 7.62718 28.6214 8.77812V5.9372C28.6214 3.95767 30.2007 2.35294 32.1489 2.35294C32.3158 2.35294 32.4825 2.36498 32.6478 2.38896L44.8599 4.16161C46.2798 4.36771 47.4354 5.42675 47.7833 6.84054L49.6812 14.5544C49.7512 14.8387 49.7866 15.1307 49.7866 15.4238V22.2981C49.7866 23.2205 49.4436 24.0616 48.8802 24.6968C49.4436 25.3223 49.7866 26.1505 49.7866 27.0588V29.4118C49.7866 31.361 48.2072 32.9412 46.259 32.9412H44.9656C44.7892 32.0719 44.4213 31.2723 43.9078 30.5882L43.9106 30.5882H46.259C46.9084 30.5882 47.4349 30.0615 47.4349 29.4118V27.0588C47.4349 26.4091 46.9084 25.8824 46.259 25.8824H3.92865C3.27925 25.8824 2.75281 26.4091 2.75281 27.0588V29.4118C2.75281 30.0615 3.27925 30.5882 3.92865 30.5882H8.12273C8.28011 30.5882 8.43028 30.6192 8.56747 30.6753C8.08743 31.3398 7.74272 32.1085 7.57379 32.9412ZM18.08 30.6432C18.1924 30.6075 18.3121 30.5882 18.4363 30.5882H34.4967H34.5002C33.9867 31.2723 33.6187 32.0719 33.4424 32.9412H19.097C18.9254 32.0951 18.5722 31.315 18.08 30.6432ZM21.0376 3.43728L17.2139 18.7402L22.2914 18.4689C22.9885 18.4316 23.5503 18.0233 23.7067 17.5034L26.2262 9.1305C26.3704 8.65151 26.1483 8.13051 25.6214 7.82069L25.4002 7.65264L21.0376 3.43728ZM32.1489 4.74244C31.4995 4.74244 30.9731 5.27735 30.9731 5.9372V22.2981C30.9731 22.9579 31.4995 23.4928 32.1489 23.4928H46.259C46.9084 23.4928 47.4349 22.9579 47.4349 22.2981V15.4238C47.4349 15.3261 47.4231 15.2288 47.3998 15.134L45.5018 7.42008C45.3859 6.94881 45.0006 6.5958 44.5274 6.5271L32.3152 4.75445C32.2601 4.74646 32.2045 4.74244 32.1489 4.74244ZM6.12868 2.37134L5.97524 2.36148C5.44087 2.2918 4.91294 2.67812 4.75469 3.31731L2.79753 11.2222C2.63195 11.891 2.9401 12.5767 3.49262 12.8323L14.8962 18.3148L18.884 2.3551L6.12868 2.37134Z" fill="#222132" />
                        </svg>

                        <h1 className=' font-Raleway font-extrabold	text-primary text-[39px] pt-5 '>130M+</h1>
                        <p className='text-5 font-bold	' >Awards  won</p>
                    </div>
                    <div className='text-center '>
                        <svg className='mx-auto ' width="50" height="42" viewBox="0 0 50 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_301_470)">
                                <path d="M21.5192 28H28.5742V23.3333H21.5192V28ZM30.9259 21V28.2333C30.9259 29.3931 29.9783 30.3333 28.8094 30.3333H21.284C20.1151 30.3333 19.1675 29.3931 19.1675 28.2333V21H30.9259ZM14.4641 9.33333V5.83333C14.4641 2.61167 17.0963 0 20.3433 0H29.7501C32.9971 0 35.6293 2.61167 35.6293 5.83333V9.33333H14.4641ZM33.2776 7V5.83333C33.2776 3.90034 31.6983 2.33333 29.7501 2.33333H20.3433C18.3951 2.33333 16.8158 3.90034 16.8158 5.83333V7H33.2776Z" fill="#222132" />
                                <path d="M47.3878 22.1672C46.4052 22.8995 45.1838 23.3335 43.8602 23.3335H6.23322C4.90969 23.3335 3.6883 22.8995 2.70569 22.1672V33.8335C2.70569 37.0551 5.33791 39.6668 8.58491 39.6668H41.5085C44.7555 39.6668 47.3878 37.0551 47.3878 33.8335V22.1672ZM3.88154 7.00012H46.2119C48.1601 7.00012 49.7394 8.56713 49.7394 10.5001V33.8335C49.7394 38.3438 46.0543 42.0001 41.5085 42.0001H8.58491C4.03911 42.0001 0.354004 38.3438 0.354004 33.8335V10.5001C0.354004 8.56713 1.93333 7.00012 3.88154 7.00012ZM3.88154 9.33346C3.23214 9.33346 2.70569 9.85579 2.70569 10.5001V17.5001C2.70569 19.4331 4.28502 21.0001 6.23322 21.0001H43.8602C45.8084 21.0001 47.3878 19.4331 47.3878 17.5001V10.5001C47.3878 9.85579 46.8613 9.33346 46.2119 9.33346H3.88154Z" fill="#222132" />
                            </g>
                            <defs>
                                <clipPath id="clip0_301_470">
                                    <rect width="49.3854" height="42" fill="white" transform="translate(0.354004)" />
                                </clipPath>
                            </defs>
                        </svg>

                        <h1 className=' font-Raleway font-extrabold	text-primary text-[39px] pt-5 '>130M+</h1>
                        <p className='text-5 font-bold	' >Awards  won</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Counter