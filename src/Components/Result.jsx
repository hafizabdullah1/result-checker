import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStudent } from '../Action/action'
import { useParams, useNavigate } from 'react-router-dom'

function Result() {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { student, error } = useSelector((state) => state.getId);

    const { id } = useParams();

    useEffect(() => {
        dispatch(getStudent(id))
    }, [])

    const maxNumbers = [75, 75, 50, 50, 75, 60, 60, 50];
    const AllSubjects = [
        'urdu',
        'english',
        'islamiyat',
        'pak_studies',
        'math',
        'physics',
        'chemistry',
        'computer',
    ];

    const subjectsWithData = AllSubjects.map((subject, index) => ({
        subject,
        maxNumber: maxNumbers[index],
        score: student ? student[subject] : 0,
        percentage: student ? student[subject] / maxNumbers[index] * 100 : 0,
    }));

    return (
        error ? (
            <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
                <div className="rounded-lg bg-white p-8 text-center shadow-xl">
                    <h1 className="mb-4 text-4xl font-bold">404</h1>
                    <p className="text-gray-600">{error}</p>
                    <p className="text-red-600 ">Oops! Student Not Found</p>
                    <button className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
                        onClick={() => navigate('/serchResult')}>Go back Serch</button>
                </div>
            </div>
        ) : student ? (
            <>
                <div className="text-center px-40 py-10">
                    <div>
                        <h1 className="text-3xl font-bold mb-4">BOARD OF INTERMEDIATE & SECONDARY EDUCATION, LAHORE</h1>
                        <p className="font-semibold">SECONDARY SCHOOL CERTIFICATE ({student.class} CLASS) EXAMINATION, 2021 <br />
                            <u>GROUP: SCIENCE</u></p>

                        <div className='px-20 flex text-start gap-10 mb-3 w-full justify-between'>
                            <div className='flex gap-10 py-2'>
                                <ul>
                                    <li className='font-semibold leading-loose'>Student Roll No:</li>
                                    <li className='font-semibold leading-loose'>Student Name:</li>
                                    <li className='font-semibold leading-loose'>Class:</li>
                                </ul>
                                <ul>
                                    <li className='underline leading-loose'>{student.id}</li>
                                    <li className='underline leading-loose'>{student.name}</li>
                                    <li className='underline leading-loose'>{student.class}</li>
                                </ul>
                            </div>

                            <div>
                                <img height={120} width={120} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="here" />
                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg border">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="text-center px-6 py-3">
                                        Subject
                                    </th>
                                    <th scope="col" className="px-6  text-center py-3">
                                        Max Number
                                    </th>
                                    <th scope="col" className="text-center px-6 py-3">
                                        THEORY
                                    </th>
                                    <th scope="col" className="text-center px-6 py-3">
                                        Percentage
                                    </th>
                                    <th scope="col" className="text-center px-6 py-3">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {subjectsWithData.map((item) => (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="text-center capitalize px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.subject}
                                        </th>
                                        <td className="px-6  text-center py-3">{item.maxNumber}</td>
                                        <td className="px-6   text-center py-3">{item.score}</td>
                                        <td className="px-6  text-center py-3">{item.percentage.toFixed(2)}%</td>
                                        <td className={item.percentage > 33 ? 'px-6 text-center  capitalize text-green-500 py-3' : 'px-6 py-3 text-center  capitalize text-red-500'}>{item.percentage > 33 ? 'pass' : 'fail'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className=' py-5 px-10 flex justify-between'>
                        <button className="bg-black text-white px-4 py-2 rounded" 
                        onClick={()=>navigate('/serchResult')}>
                            <i className="fa-solid fa-caret-left"></i> Go Back
                        </button>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded" 
                        onClick={()=>navigate('/')}>
                            Go To Home <i className="fa-solid fa-house"></i>
                        </button>
                    </div>
                </div>
            </>
        ) : (
            <p className='text-center'>loading...</p>
        )
    );

}

export default Result;
