import React from 'react';
import { Link } from 'react-router-dom';

class ProjectShow extends React.Component {
    constructor(props){
        super(props);

        this.months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

        this.renderTags = this.renderTags.bind(this);
        this.renderTimeline = this.renderTimeline.bind(this);

    }

    componentDidMount(){
        this.props.fetchProject(this.props.match.params.id)
    }

    renderTags(){
        return(
            <>
            <span>Grades {this.props.school.grade_range}</span>
            <span>{this.props.school.city}, {this.props.school.state}</span>
                {this.props.categories.map( category => (
                    <span>{category}</span>
                ))}
            </>
        )
    }

    renderTimeline() {
        const pd = new Date(this.props.project.created_at);
        return (
            <ul className="timeline-list">
                {this.props.donations.map( donation => {
                    const d = new Date(donation.created_at);
                    return (
                    <li>
                        <span className="timeline-date">{d.toLocaleDateString('en-us', {month: 'short', day: 'numeric'})}</span>
                        <span className="timeline-photo-donor"></span>
                        <span className="timeline-name"><strong>{donation.display_name}</strong> donated</span>
                    </li>
                    )})}
                    <li>
                        <span className="timeline-date">{pd.toLocaleDateString('en-us', {month: 'short', day: 'numeric'})}</span>
                        <span className="timeline-photo-teacher"></span>
                        <span className="timeline-name"><strong>{this.props.teacher.display_name}</strong> created this project</span>
                    </li>
            </ul>
        )
    }

    render() {
        const { project, teacher, school, donations, categories } = this.props;
        const stillNeeded = Math.floor(project.goal - project.progress);

        const progressPct = () => (stillNeeded > 0 ? `${Math.floor((project.progress/project.goal)*100)}%` : '100%');
        const meterPct = progressPct();
        const meterWidthStyle = {
            width: meterPct,
        };


        return (
            <div className="project-show">
                <div className="progressbar-main">
                    <div className="grid-container">
                        <div className="col-1-2">
                            <ul>
                                <li><strong>{project.donors}</strong> DONORS</li>
                                { stillNeeded > 0 ? <li><strong>${stillNeeded}</strong> STILL NEEDED</li> : <li><strong>$0</strong> STILL NEEDED</li> }
                                <li><strong>${project.goal}</strong> GOAL</li>
                            </ul>
                            <div className="meter-frame">
                                <div className="meter" style={meterWidthStyle}></div>
                            </div>
                        </div>

                        <div className="col-2-2">
                            <form>
                                <div className="inputdiv">
                                    <div className="inputfield">
                                        <input type="text"/>
                                    </div>
                                </div>
                                <button>Donate</button>
                            </form>
                        </div>

                    </div>
                </div>

                <div className="projectinfo-main">
                    <div className="grid-container">
                        <div className="col-1-2">
                            <div className="project-details">
                                <h1>{project.title}</h1>
                                <blockquote>{project.blurb}</blockquote>
                                <h3>My Students</h3>
                                <p>{project.about_students}</p>
                                <h3>My Project</h3>
                                <p>{project.description}</p>
                            </div>
                            <div className="project-timeline">
                                <h2>Project Timeline</h2>
                                {this.renderTimeline()}
                            </div>
                        </div>
                        <div className="col-2-2">
                            <div className="classroom-info">
                                <div className="classroom-photo"></div>
                                <div className="teacher-photo"></div>
                                <h4>{teacher.display_name}</h4>
                                <p>Grades {school.grade_range}</p>
                                <p>{school.name}</p>
                                <p>{school.city}, {school.state}</p>
                            </div>
                            <div className="project-tags">
                                {this.renderTags()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    

}

export default ProjectShow;