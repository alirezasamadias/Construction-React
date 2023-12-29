import { Link } from 'react-router-dom';

// Fake Server
const data = [
    {
        id: 1,
        title:'redeveloping florida’s remote southern coast',
        link:'/article01'
    },

    {
        id: 2,
        title:'how We manage large construction projects',
        link:'/article02'
    },

    {
        id: 3,
        title:'future proofing a modern home',
        link:'/article03'
    }
];

function RecentPosts() {
  return (
    <section className='recent-posts'>
        <h2 className='title-md'>recent posts</h2>

        <ul className='list'>
            {data.map((item) => {
            const {id,link,title} = item;
            
            return (
                <li className='list-item' key={id}>
                <Link to={link} className='list-item-link text-link'>
                    <i className='icon-right'></i>
                    {title}
                </Link>
                </li>
            );
            })}
        </ul>
    </section>
  );
}
  
export default RecentPosts;