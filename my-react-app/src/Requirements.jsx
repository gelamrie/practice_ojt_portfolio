function Requirements() {
    return (
        <div className="requirements-container">
            <h2>Requirements</h2>

            {/* Box 1: Before OJT */}
            <div className="section-card">
                <h3>Before OJT</h3>
                <ul>
                    <li>Cover Letter</li>
                    <li>Intenship Agreement</li>
                    <li>Company Profile</li>
                    <li>Memorandum of Agreement (MOA)</li>
                    <li>Student Waiver</li>
                    <a href="https://drive.google.com/file/d/1wxS2glqkuNFUzP9WS8IgafcI3zg3ClcV/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                        <li>Letter of Endorsement</li>
                    </a>
                    <a href="https://drive.google.com/file/d/1qwoRBP3yfEGYJK3tR6srlUWCmwdCsUJQ/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                        <li>Letter of Intent</li>
                    </a>
                    <li>Medical Certificate</li>
                    <li>Consent Form</li>
                    <a href="https://drive.google.com/file/d/1jCh-ChImizoJvjC7ol1Pqre9rstVnIY5/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                        <li>Curriculum Vitae</li>
                    </a>
                    <li>Insurance</li>
                </ul>
            </div>

            {/* Box 2: During OJT */}
            <div className="section-card">
                <h3>During OJT</h3>
                <ul>
                    <li>Weekly Report</li>
                    <li>Weekly Documentation</li>
                </ul>
            </div>

            {/* Box 3: After OJT */}
            <div className="section-card">
                <h3>After OJT</h3>
                <ul>
                    <li>Evaluation for Supervisor</li>
                    <li>Performance Evaluation Grading</li>
                </ul>
            </div>
        </div>
    );
}

export default Requirements;