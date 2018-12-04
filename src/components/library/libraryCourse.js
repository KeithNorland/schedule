import React, { Component } from 'react';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label className="library-course_title">Problem Solving</label>
                {/* icon component */}
                {/* arrow component */}
                {/* action button component */}
                <div className="library-course_description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper feugiat neque eu lobortis. Proin eget diam eget ante suscipit viverra. Mauris enim dui, fermentum laoreet volutpat ac, mollis nec leo. Quisque a orci ut nisl molestie auctor ut sed purus. Nulla facilisi.</p>
                </div>
            </div>
        )
    }

}

export default LibraryCourse;
