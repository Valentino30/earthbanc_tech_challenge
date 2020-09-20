import { useEffect } from "react";
import { connect } from "react-redux";

import { getKittens } from "../redux/actions/kitten";

function KittensCarousel({ user, getKittens, kittens }) {
  useEffect(() => {
    if (!user.isLoggedIn) window.location.href = "/login";
  }, [user]);

  useEffect(() => {
    getKittens();
  }, []);

  return (
    <ul className="carousel__list">
      {kittens &&
        kittens.map((kitten) => (
          <li className="carousel__item" key={kitten.id}>
            <img src={kitten.src.small} alt="kitten" />
          </li>
        ))}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  kittens: state.kittens,
});

const mapDispatchToProps = (dispatch) => ({
  getKittens: () => dispatch(getKittens()),
});

export default connect(mapStateToProps, mapDispatchToProps)(KittensCarousel);
