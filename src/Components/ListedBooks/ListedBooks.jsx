import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../utilitise/Addtobdja'
import Book from '../Book/Book';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';


const ListedBooks = () => {
    const [readList, setReadList] = useState([])
    const allBooks = useLoaderData();
    const [sort, setSort] = useState('') 

    useEffect(() => {
        const storedReadList = getStoredReadList()
        console.log(storedReadList)
        const storedReadListto = storedReadList.map(id => parseInt(id))

        // console.log(storedReadList, storedReadListto, allBooks)

        const readBookList = allBooks.filter((book) => storedReadListto.includes(book.bookId))


        setReadList(readBookList)
    }, [])
    console.log(readList)
   const handlesort = sortType => {
    setSort(sortType)

    if(sortType === 'No of pages'){
        const  sortedReadList = [...readList].sort((a, b) => a.totalpages - b.totalpages)
        setReadList(sortedReadList)
       }

       if(sortType === 'Ratings'){
        const sortedReadList = [...readList].sort((a, b) => a.rating - b.rating)
        setReadList(sortedReadList)
       }

      
   }


   

   
   
    return (
       
        <div>
             <Helmet>
            <title>Lested Book </title>
        </Helmet>
            <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="btn m-1">{sort ? `Sort by : ${sort}`  : "Sort by"}</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={()=> handlesort('Ratings')}><a> Ratings</a></li>
                    <li onClick={()=> handlesort('No of pages')}><a>No of pages</a></li>
                </ul>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Books i read: {readList.length}</h2>
                    {
                        readList.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>Books I read</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;