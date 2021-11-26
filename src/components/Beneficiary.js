import React, {useState} from 'react';
import decoration from "../assets/Decoration.svg";
import {
    foundations,
    ngo,
    local,
    foundationsDescription,
    ngoDescription,
    localDescription
} from "../data";
import Posts from "./Posts";
import Pagination from "./Pagination";

const Beneficiary = ({name}) => {
    const [posts, setPosts] = useState(foundations);
    const [description, setDescription] = useState(foundationsDescription);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);


    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    //Change page
    const paginate = (number) => {
        setCurrentPage(number)
    }


    //Change beneficiary and description
    const handleClick = (param1, param2) => {
        setPosts(param1);
        setDescription(param2);
        setCurrentPage(1);
    }

    return (
        <section id={name} className="beneficiary">
            <div className="beneficiary__container container">
                <h2 className="title">Komu pomagamy?</h2>
                <div className="decoration"><img alt="decoration" src={decoration}/></div>
                <div className="beneficiary__objects-container">
                    <div onClick={() => handleClick(foundations, foundationsDescription)} className={`beneficiary__object button ${posts === foundations ? "beneficiary__object--active" : ""}`}>Fundacjom</div>
                    <div onClick={() => handleClick(ngo, ngoDescription)} className={`beneficiary__object button ${posts === ngo ? "beneficiary__object--active" : ""}`}>Organizacjom pozarządowym</div>
                    <div onClick={() => handleClick(local, localDescription)} className={`beneficiary__object button ${posts === local ? "beneficiary__object--active" : ""}`}>Lokalnym zbiórkom</div>
                </div>
                <p className="beneficiary__description">{description}</p>
                <Posts beneficiaries={currentPosts}/>
                {posts.length > postsPerPage && <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} page={currentPage} />}
            </div>
        </section>
    );
};

export default Beneficiary;