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
    const paginate = (number) => setCurrentPage(number)


    return (
        <section id={name} className="beneficiary">
            <div className="beneficiary__container container">
                <h2 className="beneficiary__title">Komu pomagamy?</h2>
                <div className="beneficiary__decoration"><img alt="decoration" src={decoration}/></div>
                <div className="beneficiary__objects-container">
                    <div onClick={() => setPosts(foundations)} className="beneficiary__object button">Fundacjom</div>
                    <div onClick={() => setPosts(ngo)} className="beneficiary__object button">Organizacjom pozarządowym</div>
                    <div onClick={() => setPosts(local)} className="beneficiary__object button">Lokalnym zbiórkom</div>
                </div>
                <p className="beneficiary__description">{description}</p>
                <Posts beneficiaries={currentPosts}/>
                {posts.length > postsPerPage && <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>}
            </div>
        </section>
    );
};

export default Beneficiary;