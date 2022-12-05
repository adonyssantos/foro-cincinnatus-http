import { getUserById } from '../services/users-api';
export default function UserDetails() {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getUserById(id).then(({ data }) => setUser(data));
  }, []);

  if (user.error) {
    return <div>{user.error}</div>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>
        <b>ID:</b> {user.id} <br />
        <b>Name:</b> {user.name} <br />
        <b>Age:</b> {user.age} <br />
      </p>
    </div>
  );
}
