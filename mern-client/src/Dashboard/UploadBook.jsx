import React, { useState } from "react";
import { Button, Checkbox, Label,Select, TextInput, Textarea } from 'flowbite-react';

const UploadBook=()=>{
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
  const handleBookSubmit=(event)=>{
    Event.preventDefault();
    const form=event.target;
    const bookTitle=form.bookTitle.value;
    const AuthorName=form.AuthorName.value;
    const imageURL=form.imageURL.value;
    const category=form.categoryName.value;
    const bookDescription=form.bookDescription.value;
    const bookPDFURL=form.bookPDFURL.value;
    const bookobj={
      bookTitle,AuthorName,imageURL,category,bookDescription,bookPDFURL
    }
    console.log(bookobj)
    //send data to
   fetch("http://localhost:5000/upload-book",{
    method:"POST",
    headers:{
      "Content-type":"application/json",
    },
    body:stringify(bookObj)
  }).then(res => res,json()).then(data => {
    alert("Book Uploaded Sucessfully!!!")
  })
  form.reset();
  }
    return(
        <div className="px-4 my-12">
            <h2 className="mb-8 text-3xl font-bold">Upload A Book</h2>
           
            <form onSubmit={handleBookSubmit}className="flex lg:w-[1180px]  flex-col flex-wrap gap-4">
              {/*first row */}
              <div className="flex gap-8">
               
              <div className='lg:w-1/2'>
              <div className="mb-2 block">
                 <Label htmlFor="bookTitle" value="Book title" />
              </div>
                 <TextInput id="bookTitle"name="bookTitle" type="text" placeholder="Book name" required />
              </div>
               {/*author name*/}
              <div className='lg:w-1/2'>
              <div className="mb-2 block">
                 <Label htmlFor="authorName" value="Author Name" />
              </div>
                 <TextInput id="authorName"name="authorName" type="text" placeholder="Author Name" required />
              </div>
              </div>
               {/*second row */}
               <div className="flex gap-8">
               
               <div className='lg:w-1/2'>
               <div className="mb-2 block">
                  <Label htmlFor="imageURL" value="Book image URL" />
               </div>
                  <TextInput id="imageURL"name="imageURL" type="text" placeholder="Book image url" required />
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
                required 
                />
           </div>
           <Button type="submit" className="mt-5">Upload Book</Button>   
      </div>
    </form>
     </div>
    )
}

export default UploadBook