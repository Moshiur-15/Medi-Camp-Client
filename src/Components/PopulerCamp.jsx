import { Button, Card } from "flowbite-react";
import banner from "../assets/banner.jpg";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaDollarSign,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function PopulerCamp() {
  return (
    <section>
      <div className="text-center">
        <h2 className="text-3xl font-bold">Popular Medical Camps</h2>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Explore the most popular medical camps with the highest number of
          participants. Join now to secure your spot!
        </p>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10 p-4 xl:p-0">
        <Card
          className=""
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={banner}
        >
          <div className="space-y-2">
            {/* Location */}
            <p className="text-gray-700 my-2 flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-500" />
              patuakhali
            </p>
            {/* Camp Name */}
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
              camp name
            </h5>
            <p className="text-base md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, dicta neque! Culpa commodi tempora necessitatibus
              sint? Earum sapiente maxime ex minima culpa similique excepturi
              neque, esse ipsa ullam cum aperiam.
            </p>

            {/* Healthcare Professional */}
            {/* <p className="text-sm text-gray-600 dark:text-gray-400 italic flex items-center gap-2">
            <FaUserMd className="text-blue-500" />
            Organized by:
          </p> */}

            {/* Camp Fees */}
            {/* <p className="text-lg text-gray-800 dark:text-gray-300 font-semibold mt-2 flex items-center gap-2">
            <FaDollarSign className="text-green-500" />
            Fees:
          </p> */}

            <div className="flex justify-between items-center">
              {/* Date */}
              <p className="text-gray-700 dark:text-gray-400 mt-1 flex items-center gap-2">
                <FaCalendarAlt className="text-blue-500" />
                10/10/2025
              </p>
              <p className="text-lg text-gray-800 dark:text-gray-300 font-semibold mt-2 flex items-center gap-2">
                <FaDollarSign className="text-blue-500" />
                100
              </p>
              {/* Time */}
              <p className="text-gray-700 flex items-center gap-2">
                <FaClock className="text-blue-500" />
                10:10
              </p>
            </div>
            {/* Participant Count */}
            {/* <p className="text-gray-700 dark:text-gray-400 mt-2 flex items-center gap-2">
            <FaUsers className="text-teal-500" />
            Participants:
          </p> */}
            <Button
              color=""
              className="bg-blue-500 hover:bg-blue-600  text-white w-full"
            >
              <Link className="text-base" to="/login">
                Details
              </Link>
            </Button>
          </div>
        </Card>
        <Card
          className=""
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={banner}
        >
          <div className="space-y-2">
            {/* Location */}
            <p className="text-gray-700 my-2 flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-500" />
              patuakhali
            </p>
            {/* Camp Name */}
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
              camp name
            </h5>
            <p className="text-base md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, dicta neque! Culpa commodi tempora necessitatibus
              sint? Earum sapiente maxime ex minima culpa similique excepturi
              neque, esse ipsa ullam cum aperiam.
            </p>

            {/* Healthcare Professional */}
            {/* <p className="text-sm text-gray-600 dark:text-gray-400 italic flex items-center gap-2">
            <FaUserMd className="text-blue-500" />
            Organized by:
          </p> */}

            {/* Camp Fees */}
            {/* <p className="text-lg text-gray-800 dark:text-gray-300 font-semibold mt-2 flex items-center gap-2">
            <FaDollarSign className="text-green-500" />
            Fees:
          </p> */}

            <div className="flex justify-between items-center">
              {/* Date */}
              <p className="text-gray-700 dark:text-gray-400 mt-1 flex items-center gap-2">
                <FaCalendarAlt className="text-blue-500" />
                10/10/2025
              </p>
              <p className="text-lg text-gray-800 dark:text-gray-300 font-semibold mt-2 flex items-center gap-2">
                <FaDollarSign className="text-blue-500" />
                100
              </p>
              {/* Time */}
              <p className="text-gray-700 flex items-center gap-2">
                <FaClock className="text-blue-500" />
                10:10
              </p>
            </div>
            {/* Participant Count */}
            {/* <p className="text-gray-700 dark:text-gray-400 mt-2 flex items-center gap-2">
            <FaUsers className="text-teal-500" />
            Participants:
          </p> */}
            <Button
              color=""
              className="bg-blue-500 hover:bg-blue-600  text-white w-full"
            >
              <Link className="text-base" to="/login">
                Details
              </Link>
            </Button>
          </div>
        </Card>
        <Card
          className=""
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={banner}
        >
          <div className="space-y-2">
            {/* Location */}
            <p className="text-gray-700 my-2 flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-500" />
              patuakhali
            </p>
            {/* Camp Name */}
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
              camp name
            </h5>
            <p className="text-base md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, dicta neque! Culpa commodi tempora necessitatibus
              sint? Earum sapiente maxime ex minima culpa similique excepturi
              neque, esse ipsa ullam cum aperiam.
            </p>

            {/* Healthcare Professional */}
            {/* <p className="text-sm text-gray-600 dark:text-gray-400 italic flex items-center gap-2">
            <FaUserMd className="text-blue-500" />
            Organized by:
          </p> */}

            {/* Camp Fees */}
            {/* <p className="text-lg text-gray-800 dark:text-gray-300 font-semibold mt-2 flex items-center gap-2">
            <FaDollarSign className="text-green-500" />
            Fees:
          </p> */}

            <div className="flex justify-between items-center">
              {/* Date */}
              <p className="text-gray-700 dark:text-gray-400 mt-1 flex items-center gap-2">
                <FaCalendarAlt className="text-blue-500" />
                10/10/2025
              </p>
              <p className="text-lg text-gray-800 dark:text-gray-300 font-semibold mt-2 flex items-center gap-2">
                <FaDollarSign className="text-blue-500" />
                100
              </p>
              {/* Time */}
              <p className="text-gray-700 flex items-center gap-2">
                <FaClock className="text-blue-500" />
                10:10
              </p>
            </div>
            {/* Participant Count */}
            {/* <p className="text-gray-700 dark:text-gray-400 mt-2 flex items-center gap-2">
            <FaUsers className="text-teal-500" />
            Participants:
          </p> */}
            <Button
              color=""
              className="bg-blue-500 hover:bg-blue-600  text-white w-full"
            >
              <Link className="text-base" to="/login">
                Details
              </Link>
            </Button>
          </div>
        </Card>
        <Card
          className=""
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={banner}
        >
          <div className="space-y-2">
            {/* Location */}
            <p className="text-gray-700 my-2 flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-500" />
              patuakhali
            </p>
            {/* Camp Name */}
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
              camp name
            </h5>
            <p className="text-base md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, dicta neque! Culpa commodi tempora necessitatibus
              sint? Earum sapiente maxime ex minima culpa similique excepturi
              neque, esse ipsa ullam cum aperiam.
            </p>

            {/* Healthcare Professional */}
            {/* <p className="text-sm text-gray-600 dark:text-gray-400 italic flex items-center gap-2">
            <FaUserMd className="text-blue-500" />
            Organized by:
          </p> */}

            {/* Camp Fees */}
            {/* <p className="text-lg text-gray-800 dark:text-gray-300 font-semibold mt-2 flex items-center gap-2">
            <FaDollarSign className="text-green-500" />
            Fees:
          </p> */}

            <div className="flex justify-between items-center">
              {/* Date */}
              <p className="text-gray-700 dark:text-gray-400 mt-1 flex items-center gap-2">
                <FaCalendarAlt className="text-blue-500" />
                10/10/2025
              </p>
              <p className="text-lg text-gray-800 dark:text-gray-300 font-semibold mt-2 flex items-center gap-2">
                <FaDollarSign className="text-blue-500" />
                100
              </p>
              {/* Time */}
              <p className="text-gray-700 flex items-center gap-2">
                <FaClock className="text-blue-500" />
                10:10
              </p>
            </div>
            {/* Participant Count */}
            {/* <p className="text-gray-700 dark:text-gray-400 mt-2 flex items-center gap-2">
            <FaUsers className="text-teal-500" />
            Participants:
          </p> */}
            <Button
              color=""
              className="bg-blue-500 hover:bg-blue-600  text-white w-full"
            >
              <Link className="text-base" to="/login">
                Details
              </Link>
            </Button>
          </div>
        </Card>
        <Card
          className=""
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={banner}
        >
          <div className="space-y-2">
            {/* Location */}
            <p className="text-gray-700 my-2 flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-500" />
              patuakhali
            </p>
            {/* Camp Name */}
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
              camp name
            </h5>
            <p className="text-base md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, dicta neque! Culpa commodi tempora necessitatibus
              sint? Earum sapiente maxime ex minima culpa similique excepturi
              neque, esse ipsa ullam cum aperiam.
            </p>

            {/* Healthcare Professional */}
            {/* <p className="text-sm text-gray-600 dark:text-gray-400 italic flex items-center gap-2">
            <FaUserMd className="text-blue-500" />
            Organized by:
          </p> */}

            {/* Camp Fees */}
            {/* <p className="text-lg text-gray-800 dark:text-gray-300 font-semibold mt-2 flex items-center gap-2">
            <FaDollarSign className="text-green-500" />
            Fees:
          </p> */}

            <div className="flex justify-between items-center">
              {/* Date */}
              <p className="text-gray-700 dark:text-gray-400 mt-1 flex items-center gap-2">
                <FaCalendarAlt className="text-blue-500" />
                10/10/2025
              </p>
              <p className="text-lg text-gray-800 dark:text-gray-300 font-semibold mt-2 flex items-center gap-2">
                <FaDollarSign className="text-blue-500" />
                100
              </p>
              {/* Time */}
              <p className="text-gray-700 flex items-center gap-2">
                <FaClock className="text-blue-500" />
                10:10
              </p>
            </div>
            {/* Participant Count */}
            {/* <p className="text-gray-700 dark:text-gray-400 mt-2 flex items-center gap-2">
            <FaUsers className="text-teal-500" />
            Participants:
          </p> */}
            <Button
              color=""
              className="bg-blue-500 hover:bg-blue-600  text-white w-full"
            >
              <Link className="text-base" to="/login">
                Details
              </Link>
            </Button>
          </div>
        </Card>
        <Card
          className=""
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={banner}
        >
          <div className="space-y-2">
            {/* Location */}
            <p className="text-gray-700 my-2 flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-500" />
              patuakhali
            </p>
            {/* Camp Name */}
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
              camp name
            </h5>
            <p className="text-base md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, dicta neque! Culpa commodi tempora necessitatibus
              sint? Earum sapiente maxime ex minima culpa similique excepturi
              neque, esse ipsa ullam cum aperiam.
            </p>

            {/* Healthcare Professional */}
            {/* <p className="text-sm text-gray-600 dark:text-gray-400 italic flex items-center gap-2">
            <FaUserMd className="text-blue-500" />
            Organized by:
          </p> */}

            {/* Camp Fees */}
            {/* <p className="text-lg text-gray-800 dark:text-gray-300 font-semibold mt-2 flex items-center gap-2">
            <FaDollarSign className="text-green-500" />
            Fees:
          </p> */}

            <div className="flex justify-between items-center">
              {/* Date */}
              <p className="text-gray-700 dark:text-gray-400 mt-1 flex items-center gap-2">
                <FaCalendarAlt className="text-blue-500" />
                10/10/2025
              </p>
              <p className="text-lg text-gray-800 dark:text-gray-300 font-semibold mt-2 flex items-center gap-2">
                <FaDollarSign className="text-blue-500" />
                100
              </p>
              {/* Time */}
              <p className="text-gray-700 flex items-center gap-2">
                <FaClock className="text-blue-500" />
                10:10
              </p>
            </div>
            {/* Participant Count */}
            {/* <p className="text-gray-700 dark:text-gray-400 mt-2 flex items-center gap-2">
            <FaUsers className="text-teal-500" />
            Participants:
          </p> */}
            <Button
              color=""
              className="bg-blue-500 hover:bg-blue-600  text-white w-full"
            >
              <Link className="text-base" to="/login">
                Details
              </Link>
            </Button>
          </div>
        </Card>

      </div>
      <div className="flex items-center justify-center mt-4 lg:mt-12">
        <Button color="" className="bg-blue-500 hover:bg-blue-600  text-white">
          <Link className="text-base px-6" to="/">
            Available Camps
          </Link>
        </Button>
      </div>
    </section>
  );
}
