function ProfileCard({
  name,
  job,
  birthYear,
  projectCount,
  isJob,
  onDelete,
  onToggle,
}) {
  const age = new Date().getFullYear() - birthYear
  return (
    <div className="card">
      <button
        type="button"
        className="card-delete"
        aria-label="삭제"
        onClick={onDelete}
      >
        x
      </button>
      <div className="avatar">{name.length > 0 ? name[0] : '?'}</div>
      <div className="name">{name}</div>
      <div className="role">{job}</div>
      <div className="meta">
        <div className="meta-item">
          <strong>{birthYear > 0 ? age : '-'}</strong>
          <span>나이</span>
        </div>
        <div className="meta-item">
          <strong>{projectCount}</strong>
          <span>프로젝트</span>
        </div>
      </div>
      <button
        type="button"
        className={`badge ${isJob ? 'on' : 'off'}`}
        onClick={onToggle}
      >
        {isJob ? '구직중' : '공부중'}
      </button>
      {projectCount >= 10 && (
        <div className="note">{projectCount}번째 프로젝트</div>
      )}
    </div>
  )
}
export default ProfileCard
