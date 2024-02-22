import React, { useState } from 'react';
import { getDatabase, ref, set } from "firebase/database";
import { v4 } from 'uuid';

const BlogApp = () => {
    const [count, setCount] = useState(0);
    const blogSubmitHandler = (e)=>{
        e.preventDefault();
        const db = getDatabase();
        const uniId = v4();
        // setCount(count++);
        // console.log(count);
        const data = {
            title: e.target.title.value,
            body: e.target.body.value,
            author: e.target.author.value,
            category: e.target.category.value,
            publishData: new Date().toLocaleDateString(),
        }
        set(
            ref(db, 'blogData/' + uniId), data
        )
        e.target.reset();
    }

    return (
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-3 sm:max-w-md mx-auto xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Create and account
                </h1>
                <form onSubmit={blogSubmitHandler} className="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label
                            htmlFor="title"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter your Title"
                            required={true}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="body"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Write here...
                        </label>
                        <textarea className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[100px]" name="body" id="body" cols="20" rows="10" />
                    </div>
                    <div>
                        <label
                            htmlFor="author"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Author
                        </label>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="author" id="author">
                            <option value="0">Select</option>
                            <option value="Prem">Prem</option>
                            <option value="Dipak">Dipak</option>
                            <option value="Raju">Raju</option>
                            <option value="Prashant">Prashant</option>
                        </select>
                    </div>
                    <div>
                        <label
                            htmlFor="category"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Category
                        </label>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="category" id="category">
                            <option value="0">Select</option>
                            <option value="News">News</option>
                            <option value="Life Style">Life Style</option>
                            <option value="Make Money">Make Money</option>
                            <option value="Travel">Travel</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Save
                    </button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account?{" "}
                        <a
                            href="#"
                            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                        >
                            Login here
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default BlogApp;
