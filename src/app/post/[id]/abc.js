import Image from "next/image";
import { useRouter } from "next/router";
import { people } from "../../../utils/people";
import { desitination } from "../../../utils/destination";
import { getImageUrl } from "../../../utils/getImageUrl";

const Post = ({ userLists }) => {
	const router = useRouter();
	const { id, foo } = router.query;

	const myLoader = ({ src, width, quality }) => {
		return `/loader.gif`;
	};

	const userList = userLists.map((user) => {
	  return (
	    <li key={user.id}>
	      <img src={getImageUrl(user)} alt={user.name} />
	      {/* <Image src={`https://imgur.com/${user.imageId}s.jpg`} alt={user.name} width={90} height={90} /> */}
	      <p>
	        <b>{`/${user.imageId}s.jpg`}</b>
	        {' ' + user.profession + ' '}
	        known for {user.accomplishment}
	      </p>
	    </li>
	  )
	})
	

	// const cityList = desitination.map((des) => {
	// 	return (
	// 		<li key={des.id}>
	// 			<Image
	// 				src={getImageUrl(des)}
	// 				alt={des.name}
	// 				width={400}
	// 				height={280}
	// 				layout="responsive"
	// 			/>
	// 			<p>
	// 				<b>{`/${des.imageId}s.jpg`}</b>
	// 				{" " + des.region + " "}
	// 				known for {des.Country}
	// 			</p>
	// 		</li>
	// 	);
	// });

	return (
		<>
			<p>Post: {id}</p>
			{foo && (
				<>
					{userList}
					<p>Post: {foo}</p>
				</>
			)}
		</>
	);
};

const getJson = () => {
	return {
		data: people,
	};
};

export async function getStaticProps({ params }) {
	const res = await getJson();
	const userLists = res.data;

	// console.log(userLists);

	return {
		props: {
			userLists,
		},
	};
}

export async function getStaticPaths() {
	return {
		// paths: [
		//   // String variant:
		//   '/post/[id]/abc',
		//   // Object variant:
		//   { params: { foo: 'bar' } }
		// ],
		// fallback: false,
		paths: [],
		fallback: "blocking",
	};
}

export default Post;
