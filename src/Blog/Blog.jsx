import React from 'react';

const Blog = () => {
    return (
        <div className='flex flex-col w-3/4 mx-auto mt-20'>
            <div>
                <h1 className='font-bold text-xl'>When do you need to use the Context Api?</h1>
                <h1 className='p-5'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</h1>
            </div>
            <div>
                <h1 className='font-bold text-xl'>What is Custom Hook?</h1>
                <h1 className='p-5'>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.</h1>
            </div>
            <div>
                <h1 className='font-bold text-xl'>What is UseRef?</h1>
                <h1 className='p-5'>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</h1>
            </div>
            <div>
                <h1 className='font-bold text-xl'>What is UseMemo?</h1>
                <h1 className='p-5'>React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.</h1>
            </div>
        </div>
    );
};

export default Blog;