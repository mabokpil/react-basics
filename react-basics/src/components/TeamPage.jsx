import { useState } from 'react'
import ProfileCard from './ProfileCard'
const members = [
  {
    id: 1,
    name: '허윤호',
    job: '프론트엔드 개발자 지망생',
    birthYear: 2002,
    projectCount: 1,
    isJob: false,
  },
  {
    id: 2,
    name: '김서연',
    job: '백엔드 개발자',
    birthYear: 1998,
    projectCount: 14,
    isJob: true,
  },
  {
    id: 3,
    name: '박도현',
    job: 'UI / UX 디자이너',
    birthYear: 2000,
    projectCount: 10,
    isJob: false,
  },
  {
    id: 4,
    name: '이하은',
    job: '프론트엔드 개발자',
    birthYear: 1999,
    projectCount: 22,
    isJob: true,
  },
  {
    id: 5,
    name: '최민준',
    job: '데이터 엔지니어',
    birthYear: 1996,
    projectCount: 8,
    isJob: true,
  },
  {
    id: 6,
    name: '정예린',
    job: '모바일 개발자',
    birthYear: 2001,
    projectCount: 5,
    isJob: false,
  },
  {
    id: 7,
    name: '강지호',
    job: 'DevOps 엔지니어',
    birthYear: 1995,
    projectCount: 31,
    isJob: false,
  },
  {
    id: 8,
    name: '윤소희',
    job: '프로덕트 디자이너',
    birthYear: 2003,
    projectCount: 3,
    isJob: true,
  },
]
function TeamPage() {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.includes(search) || member.job.includes(search)
    let matchesFilter
    if (filter === 'all') matchesFilter = true
    else if (filter === 'job') matchesFilter = member.isJob
    else matchesFilter = !member.isJob
    return matchesSearch && matchesFilter
  })
  return (
    <div className="page">
      <div className="page-header">
        <h1>개발자들</h1>
        <p>프로필을 확인하세요</p>
      </div>

      <div className="toolbar">
        <div className="search">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="filters">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`filter-btn ${filter === 'all' ? 'is-active' : ''}`}
          >
            전부
          </button>
          <button
            type="button"
            onClick={() => setFilter('job')}
            className={`filter-btn ${filter === 'job' ? 'is-active' : ''}`}
          >
            구직중
          </button>
          <button
            type="button"
            onClick={() => setFilter('study')}
            className={`filter-btn ${filter === 'study' ? 'is-active' : ''}`}
          >
            공부중
          </button>
        </div>
        <div className="result-count">
          <strong>{filteredMembers.length}</strong>명 표시 중
        </div>
      </div>

      {filteredMembers.length >= 0 ? (
        <div className="card-list">
          {filteredMembers.map((member) => (
            <ProfileCard
              key={member.id}
              name={member.name}
              job={member.job}
              birthYear={member.birthYear}
              projectCount={member.projectCount}
              isJob={member.isJob}
            />
          ))}
        </div>
      ) : (
        <div className="empty">
          <div className="empty-icon">🔎</div>
          <div className="empty-title">업서요</div>
          <div className="empty-desc">찾는 결과가 없습니다</div>
        </div>
      )}
    </div>
  )
}
export default TeamPage
