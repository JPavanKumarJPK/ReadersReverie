import React, { useState } from "react";
import { json, useLoaderData, useParams } from "react-router-dom";
import { Button, Checkbox, Label,Select, TextInput, Textarea } from 'flowbite-react';
const Editbooks= () =>  {
    const {id} =useParams()
    const {bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL}=useLoaderData();
    const bookCategories=[
        "Fiction",
        "Non-Fiction",
        "Mistery",
        "Programming",
        "Science-Fiction",
        "Fantacy",
        "Horror",
        "Bibliography",
        "Autobiography",
        "History",
        "Self-Help",
        "Business",
        "Children Books",
        "Travel",
        "Religion",
        "Art and Design"
      ]
     
      const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);
    
      const handleChangeSelectedValue = (event) => {
          console.log(event.target.value)
        setSelectedBookCategory(event.target.value);
      }
     // handle book submission
      const handleUpdate=(event)=>{
        Event.preventDefault();
        const form=event.target;
        const bookTitle=form.bookTitle.value;
        const AuthorName=form.AuthorName.value;
        const imageURL=form.imageURL.value;
        const category=form.categoryName.value;
        const bookDescription=form.bookDescription.value;
        const bookPDFURL=form.bookPDFURL.value;
        const updatebookobj={
            bookTitle,AuthorName,imageURL,category,bookDescription,bookPDFURL
          }
        //  console.log(bookobj)
        //update book data
        fetch(`http://localhost:5000/book/${id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(updatebookobj) 
        }).then(res => res,json()).then(data => {

            alert("Book is updated Sucessfully!!!")
          })
      
      }
        return(
            <div className="px-4 my-12">
                <h2 className="mb-8 text-3xl font-bold">Update the book data</h2>
               
                <form onSubmit={handleUpdate}className="flex lg:w-[1180px]  flex-col flex-wrap gap-4">
                  {/*first row */}
                  <div className="flex gap-8">
                   
                  <div className='lg:w-1/2'>
                  <div className="mb-2 block">
                     <Label htmlFor="bookTitle" value="Book title" />
                  </div>
                     <TextInput id="bookTitle"name="bookTitle" type="text" placeholder="Book name"defaultValue={bookTitle} required />
                  </div>
                   {/*author name*/}
                  <div className='lg:w-1/2'>
                  <div className="mb-2 block">
                     <Label htmlFor="authorName" value="Author Name" />
                  </div>
                     <TextInput id="authorName"name="authorName" type="text" placeholder="Author Name"  defaultValue={authorName}required />
                  </div>
                  </div>
                   {/*second row */}
                   <div className="flex gap-8">
                   
                   <div className='lg:w-1/2'>
                   <div className="mb-2 block">
                      <Label htmlFor="imageURL" value="Book image URL" />
                   </div>
                      <TextInput id="imageURL"name="imageURL" type="text" placeholder="Book image url" defaultValue={imageURL} required />
                   </div>
                    {/*category */}
                   <div className='lg:w-1/2'>
                   <div className="mb-2 block">
                      <Label htmlFor="inputState" value="Book category" />
                   </div>
                   <Select id='inputState' name='categoryName'className="w-full rounded" value={selectedBookCategory}
                   onChange={handleChangeSelectedValue}>
                   {
                    bookCategories.map((option)=><option key={option} value={option}>{option}</option>)
                   }
                   </Select>
                   </div>
                   </div>
                   {/* book description*/}
                   <div>
                   <div className="mb-2 block">
                      <Label
                       htmlFor="bookDescription" 
                       value="book Description" 
                       />
                   </div>
                   <Textarea
                    id="bookDescription"
                    name="bookDescription"
                    placeholder="Write your book description..." 
                    required 
                    className="w-full"
                    rows={5}
                    defaultValue={bookDescription}
                    />
                    {/*book pdf link*/}
                    <div>
                    <div className="mb-2 block">
                    <Label
                     htmlFor="bookPDFURL" 
                     value="book PDF URL" 
                     />
                     </div>
                    <TextInput 
                    id="bookPDFURL" 
                    name="bookPDFURL"
                    type="text" 
                    placeholder="book PDF URL" 
                    defaultValue={bookPDFURL}
                    required 
                    />
               </div>
               <Button type="submit" className="mt-5">Update Book</Button>   
          </div>
        </form>
         </div>
        )
}

export default Editbooks