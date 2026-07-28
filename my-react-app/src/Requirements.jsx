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
                    <li>Memorandum of Agreement (MOA)</li>
                    <li>Student Waiver</li>
                    <li>Letter of Endorsement</li>
                    <li>Letter of Intent</li>
                    <li>Medical Certificate</li>
                    <li>Consent Form</li>
                    <li>Curriculum Vitae</li>
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