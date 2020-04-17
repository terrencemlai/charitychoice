export const selectProject = ({ projects }, id) => {
    return projects[id] || {title: '', 
                            blurb: '', 
                            description: '', 
                            about_students: '', 
                            teacher_id: '',
                            goal: '', 
                            created_at: '',
                            school_id: '',
                            progress: '',
                            donors: '',
                            donationIds: [],
                            categoryIds: [],
                        };
};

export const selectSchool = ({ schools }, id) => {
    return schools[id] || { name: '', 
                            city: '', 
                            state: '', 
                            zip: '', 
                            latitude: '',
                            longitude: '', 
                            grade_range: '',
                            teacherIds: [],
                        };
};

export const selectTeacher = ({ teachers }, id) => {
    return teachers[id] || {school_id: '', 
                            display_name: '', 
                        };
};

export const selectCategories = ({categories}, catIds=[]) => {
    const catArr = [];
    catIds.map( catId => catArr.push(categories[catId].category))
    return catArr;
}

export const selectCurrentTeacher = (session) => {
    return session.teacherId || 0;
}
  
//   export const selectReviewsForBench = ({ benches, reviews }, bench) => {
//     return bench.reviewIds.map(reviewId => reviews[reviewId]);
//   };
//   export const asArray = ({ benches }) => (
//     Object.keys(benches).map(key => benches[key])
//   );
  