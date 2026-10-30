function ProfileCard({ name, job, birthYear, projectCount, isJob }) {
  const age = new Date().getFullYear() - birthYear;
  return (
    <div className="card">
      <div className="avatar">{name.length > 0 ? name[0] : "?"}</div>
      <div className="name">{name}</div>
      <div className="role">{job}</div>
      <div className="meta">
        <div className="meta-item">
          <strong>{birthYear > 0 ? age : "-"}</strong>
          <span>나이</span>
        </div>
        <div className="meta-item">
          <strong>{projectCount}</strong>
          <span>프로젝트</span>
        </div>
      </div>
      <div className={`badge ${isJob ? "on" : "off"}`}>
        {isJob ? "구직중" : "공부중"}
      </div>
      {projectCount >= 10 && (
        <div className="note">{projectCount}번째 프로젝트</div>
      )}
    </div>
  );
}
export default ProfileCard;
