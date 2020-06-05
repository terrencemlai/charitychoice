import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { receiveCartItem } from '../../actions/cart_actions';

class ProjectShow extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            donationAmount: 0,
        }

        this.renderTags = this.renderTags.bind(this);
        this.renderTimeline = this.renderTimeline.bind(this);
        this.renderDonateOrEdit = this.renderDonateOrEdit.bind(this);
        this.handleDonateAmount = this.handleDonateAmount.bind(this);
        this.handleDonateSubmit = this.handleDonateSubmit.bind(this);

    }

    componentDidMount(){
        window.scrollTo(0, 0);
        this.props.fetchProject(this.props.match.params.id);
    }

    renderTags(){
        return(
            <>
            <Link className="link" to={`/projects/search?keyword=Grades ${this.props.school.grade_range}`}><span>Grades {this.props.school.grade_range}</span></Link>
            <Link className="link" to={`/projects/search?keyword=${this.props.school.city}, ${this.props.school.state}`}><span>{this.props.school.city}, {this.props.school.state}</span></Link>
                {this.props.categories.map( category => (
                    <Link className="link" to={`/projects/search?keyword=${category}&page=1`} key={category}><span>{category}</span></Link>
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
                    <li key={donation.id}>
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

    handleDonateAmount(){
        return e => this.setState({ donationAmount: e.target.value })
    }

    handleDonateSubmit(e){
        e.preventDefault();
        if (this.state.donationAmount > 0) {
            this.props.receiveCartItem({ projectId: this.props.project.id, amount: this.state.donationAmount });
            this.props.history.push(`/donate/${this.props.project.id}`);
        }
    }

    renderDonateOrEdit(){
        if (this.props.teacher.id === this.props.currentTeacherId) {
            return (
                    <div className="pseudo-edit-button"><span className="material-icons">edit</span> Edit Project</div>
                )
        } else {
            return (
                <form onSubmit={this.handleDonateSubmit}>
                    <div className="inputdiv">
                        <div className="inputfield">
                            <input type="text" onChange={this.handleDonateAmount()}/>
                        </div>
                    </div>
                    <button >Donate</button>
                </form>
            )
        }
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
                            {this.renderDonateOrEdit()}
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

export default withRouter(ProjectShow);