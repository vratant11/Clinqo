import React, { useEffect } from "react";
import "./blog.css";
import axios from "axios";


export default function National() {
  const [blogdata, setBlogData] = React.useState([]);

  const url = "https://scholarpad.herokuapp.com/api/v1/mylist";

  const getblog = () => {
    const token = localStorage.getItem("token");
    const data = {
      accessToken: token,
    };
    axios
      .post(url, data)
      .then((res) => {
        setBlogData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getblog();
  }, []);

  return (
    <>
      <div className="main_list">
        <div className="logo">
            <a href="https://clinqo.com">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiwAAABbCAMAAABnES6LAAAAq1BMVEX///8iH0AgHT8bFzsQCzbu7vAWEjkdGj1UUmnl5ejf3+QZFToiHkM8OlSZmKP7+/wAAC5hX3VDQVqRj56Pj5lvbn3NzdEAADESDTcAACz29vgJADMAACooJUVMSWLr6+6qqbTEw8u4t8CIhpYwLUvW1dpraXyop7M4NlEzME58e4xZV219e4u5ucKVlKIfG0IKADaAf49iYXJHRVwTDDsAACZ2dIgAACGJiJN2OiLIAAATiklEQVR4nO1dbXuqOrPWgIlKBcWtRCgIKqi12tp2e9b//2UHaxOChJdAate2z/1pXauSSTJ3JjOTt1arHub9MNCPUXfgttvudmDujv60Pzcqft2ZX9Cza4q/hjEnqFqFqwpdmuOdm7M1R6exH4Y9SXW7htHrT/Wnkbdtt4E76EbLRdjvfJOsS8NiYRsXtLde3LBFGM6/SxgXof+n61qWCjUE2mcApEBn9uA960EV9XdO3gXmWlKN5l8FeqM6Kg700eqrOXF7AFA07AyhefTl88WY6hPzJZalXLou7jlsOavdH78vXVbLDg67Tz1dhMWy4oZZ0DsubsWXzsIDECsXlqQAUPz/7m5fai86XYg+YemSKtV70T4L1Daifd6ZnlYK1kC2PQjDtulLM34XWW5cKrqWBYCGITB1mbJaneDknhuW1ZMSC+suevVssAjC5WCocHo2abhmPUwWxWa101UuP1alkeXhUiU0ECNLePAsiHLbAhTrZbKQpMJPWfldBxQHRr4suoR/zBnMV9NZS88LSbJy0Dut1NyuTWoCNXNZpLS/hCxGP9qqPBN51Zh3X4JL0X9aqUppx8F3XcKAN8KoXE8AK11Z44CD8PiBy6lyUZpqjcPcgv4Oskyj13yjwkKxVk3pEh6H1bpOsbZ6U2oGkVVgVBhoM1OaKbuCv1ErVeELeHvIq8jfQBZ7vMKV24Jwd9qgdoYuIsvpBg1ktTpLUI0qZyhwlD+m66PXHVa0KkmrHwK+Tf15shh71xFqjmadaodGwdYSk/UY1ZZlLF6FhnQbWkfpcXswuBobsfMH4zhsOJzNZkPLwXHcmakIQkuucfl5shxfMrUFSIOq6sRQMc0JMHC8esbFOGjXvkrSdZ89p2Tqgs2axsU+XavhnNU4C4tlXYRlGmbt5BoXe/yYrgNS1W03OuqLYBqG02DhLycjEzrada+oLq+Hf5osU+969CHorN7fJuPD2vf1w/J55LnOtTFXrNx5tQD9gZMuB8SiupPj+tx1cc+tl5PdRr12R5XhuI4zMb32FJD6sdlNllTYMdqtMg3Thr7EMNo+pcwKgI9bfX+dCLT7gb6znCvmKis/W94Pk2XvwiumPG5PiymbeLB7U//0MEw7wMA6CWtwv9HSooYPsah013XCYDl4vHKA1ZH47LB208Lw42a8D9PldKb7k3vdMPwkjS32SE2VvIry8rTGXO+u0uRGajZL+7Nk8dNmX4GDp8DgdJZhB9EgFe4CaApq0E99j9RttOCJOmd2nwYwJUvtCuYXDT3Ft3O7pnxZxj7apGwZUEeSoqLOCDPqx3BZPMVNj26qIsjJzL8/Spa1xbQGKEOvKKnfW5sW675gMQ0e2ARqPCcfirqu53spRxibYr7Ekh2lyBn4RTn9/mHLTo8Aj6SsABg7hisanJT2ljGPo1LaamAdMvT+SbLo7IyNsFeSbG7Z/oC12dpAIFA5MOoDsH0s+7SzTvkcUIgtY4ttV3lmqHN0U0bAkxAU2W/JHBSbxmop4vlhC0kfLTn1/Dmy6ENWG4Mq8m2d9XGgWZktaa5Mqmi+s3QVtn7V2bJ0GEa74yqa76dCJ7xrbluiZCSi2VNl9vWjz7QMcMacafPnyLJgBhOwvIp6D7uMyda6FTthnfQcgFal5fgYfZehGPSqKlBPuAKcqhbJCNpM5AJ3FWXlFndKZni0Elp5Wm+VuJMOvD/9GFl8RulK269e/tJNxiAeVGLLgpGlCmTZjDEzUeKKfD4kXEEfAstLnYgxmk5DL9dPYjHlQzApFb6ozphfxR8iS/+VGbSuUN4rUJOegMcK2gi3ids24+cm8+C/JlORGlWqXWIwlRdfRJat/8tQk6+uipgmdkUT9M1jzKMcLvwQWebdROHqTjAwDc3kY6e82naS8kBi6osRMMmZIdc2X9VtRYkJN6JqWjBGc9hg18LcpBTX2jV2cv1lC4mTxFVX34S9uZ5H53dglRlZ44n+GH2IayDc0NkBlFtAe0d/Dd/FU/dBErCjVe3Mv/FMW6wIE7YIP0MWPzGTzqRGnDj36HhXylwJPyHWQ53RytgxxS2bw57oIIBmnc2ZQZuyRdvVdVsWNHJHrtS1ph8hS39Du0St1yW9d6pB51j4y/kHlTX064iKHT5UUVZrSp3bukN6n7g8w5oasQekvgA32mGRwU+QxTjSwQ53NXcA9BINWoVqeSZjHagVXA4u9nSRDXAXYyk6O0Jh0N7XFKYzZqHexvEltW6aX7MSOfgJsgSzpD9qZ5+mK6JBrVtgnPY0y49PtVfo1jT01rwiQ5goelj7rITxRL0ePKljdXvUxcYjyRvBf4Isyfiz6o6/GAeqGZhfijEiXY8+GuTQd9QUFtXY+CCcUif11dQZkFAGwDpT2YkYFmUje5/mD5BlQeM62Egmjb4VM7dXgkfS8UqTzZgdGouiQT4NqP1XKmd7eejjxI6Jfz2nbhP0G1SCi9uTxZ6Qwa7lK7kKpg+kU4e5w50aMfzcyCT7dG5QciOqnkns/2MDg9li1pZAsTvG/5gYQThpVAkebk+WgHaF2jCuo6vWipfDhD3Z04A2DRdy6XSm7fJKomtCcNRM1twjdgwKT2c9jzJW/vbv25OFdrtaEoeWwiYROAD8EDEJuxqftwyph+TkzGcGcSwBajLjneEPyXgSzswFZO0TVlqcEMPNyWITc4C2jam/JmMZ/+GOwJ5LZA2arvkbdPLEJ/4vAqJh2GzGO4Om/R3RqIoMRSA3HXfBzcmyJl4gfm4sqkPST2jLJYP/ZQ4AbH7qf0qIBzQ+F8iiMVCaq8lX6fQp9qFNDKD4BFYBtyZLMkIfJdxVoBPm8SNaMveLHrvmYvTlKwPMdXF7hLhKjRAmU9g7MS0zsZqT4dFW/ea1yODWZOlvJfZpKySZOa5P2SPuLcyZOYRA9YC5vtaCxF2WjEPuf4izpYptVUictO84C3trskxJMtTyZQgjtUdbzh/3RH/5obUAOoQsGvdkCDFywJVxk0zg1PJTbZIqUJputePi1mQZqxJnhsTFBYDjKIwxmTikzN90HuL5jlRNEtzbM8gqBXoX4V5I4sMK23xq4NZkIW6E9ibFTva+MrSAk660icupyVkjobFX9kBNqzV/+dIu52xWHewoM0UWjgOSoPn4jjP2NycLdcAabRukoMkN9Z9sRUhGVTj+5GNK+cA5JRHO6ig3Hz5lpogLtPj6ClU/9yCCG5Ol8+9XH1hy+tQg1oNj/cM2SfDKkdUn5NM43jRRbvOMzgUhifOE9EIcJ+3tW65RvDFZpiRz9SipNQfSPVmvc/plxZCkrYUd4rTwkh9kSUbpSpHV6pGoEQqcfTZOX0MHc2yfBNyYLHTetyRJKzC8ZHdh6cbLqqApIk7lCZFkZdnnRC9K0W6dK9g72cpM48ZkIYaAG+rWQUAdwYy0MbXJknIOdEH332yBJIsma0zTtXm0FSALWUWUkLHm4cZkIf3Nm/ZrgWyYAy+ZuYYkqKSt1dN88WPWVG3kOtNJWg6UbhJPQHbf8mJDGbgxWagCZeRUzwi3X14szpCFTODSyELnUE4OnpLFlyTsH5Lkg9W9O5sktLXvuSr1xmShHljT7QkEIVmScTJkoW5E8xXLC2g4O8vsQTCIPyol2X8GNWOv1cnSIdvB0F2QhczEzU5nMqDx7DBDFrLtUhox6XmcYfaaGzKmJaUEGLLMBMjycpdkkZSTY8mSGe2kZTclS/ZPNfE/svy3ybLOn4a+0bIIZKRssucmf6NwI9wxWUZfLZPmsxyo/jIt+0afxREgy+auoqFbkiWSHQ0V5Vmkh840GnoRIIt5V3mWW5JFeuhMLyd4zP7t78izeHeVwb0lWWgCUFYGl1QevGT/Zn5bBlfgXKE9ogHgt7xgdMdkoUsLQvuH8jEv2pZH1KT95NoQkyC/h1XnW5IlIHv761+LkwLd38/bPkxXnWVsLY7Rp7uLRW7cTjZK3MN+lluSJfxof/W3nHB2T08pcaYa6ftZiDAhvezJuvjrPeyUuyVZ6EECSU2jwRBvW+VU8k65da2dcvQeEqfuXTSFuGOyJNN+3lFoMSQn2jgNk70Hl6xVgAcR8s3fqacjpRZXuGOyMIdoZLh7c3IPHtd7THb3iz9XwgO5dkPwFESyP+s7PNx7Jgu9V7ueUQ7SY5revoL/8H5Nzw21ZfiWeyJMMLqiNzlIMnBp3DNZQnIXnFbnyFXvxWXPps3JXjiAfd7PF3RMc/8siGPNE4l9cnmRtOQSi3smS4teglF8byAX59fRX5nruH0yMQDEVQM964wGwrIy6NMLJ2eCYQ29heSl6b0fHNw1Weh1yTXyquMzOawJmVOMEb1DKmeTH716X2seD9FYCD3U/bLxWxEc3DVZwtevngNQ1JHYXw4bw81XsXvi3gKc43Em97PUumSShUFCq7bwdaz0qoD2o3zTctdkSe6lxU9ixYbkOh3lstpPb4JpwyiHCja5HBs0Ni3UTQVt0eRacqXJN3gtd02WZFMIAELjjLnuHaHztHOgb8nkX0RMt7soDb2WxGOpofCA3mcmPyC6b7L06L3vUOgBnxHzbh1wuv0p5Qoa5JaT6Lj+lcmfSB4AqHNP8JbewurKzrXcN1mS5AgQGmfTDfvILTRJJxU/I0Pj3Wbn0pMHAITd2zOCD1rv7n/7hu1bk8VOXtkQuurTfk69n5o81VHU//S6nzZ+q6+mOX1KCzh1LiGy3+idvZrkPVB3ThbmETqxa68NHbNPOxP1oULf9UiF1b9K1Uhev4O5V+4WIgT0XQqhVchy3DtZkoAo7nshb3E6SD9m/1ntkudq6G3HoPaDHGP6qETt+3ST11+R3NTcvZMlub0/Hu5LocmhF7FvlF/6vsQ47RM11XxDxk+mP6fuDk3m1Tu0kvni0N2TpXVKnsDFYm00lgr7bHw8k/lln0TJg3O11LSmTxu1FbP+8zouLQW9SrQt908WJmcCRF2JYMU6LhW2C7Dv8Yk9p/wJ/zF5f7rJLqoD+6qzeDl5Bvj+ydIKk54D8CAWpoQma1uAV8qWaRJ+IeEnGQ8oqanVaK8b80Y0elyItbln5m33/gVkaa2TiQjMnkW8XJt9BTyGVj4RrZk3wF8F3gCPVfGU2JU2bnZKoGcmbAFIyFcLBtDJWd36DWQxnhIFttVR9a1nvRGbm/tsFCzreOPIGDLnWD347e8YYsL3hvu++6vkPWrgDCrnmPqnWdyhDv/55N9AFuZVzbN1GO6rDTRjb8GrcOjc8V5Zx/9h1grwQ1BNmL1WNYYrzZ7tOmPKvF7e1lbjSgXO9e3FCjvc5dLfQRZ7wtgWACdVjEv/iNKxEFGkWxIU2xEjDGnPVYRN39iMMTQlnOQIWecc4cG6jC52b7mCpMlqxLEtv4MsLfvEsgW7x7LFm96Ti9mEP/tveCzud/vZSX4OoLssoYsRjgCbAIQbKVfVB6xtaaOhty4qNlxELyrTTIeTPv4lZIn9Ftb9AOrDuCiiDMdtdqS38Xub6Xhglfg9BmvIYmF4XFA5I5ioqekOl050FRFuUjloBW+ihcGZFQ0jWO42OD3nKjM/80OGLEZtpEr8O8nSMpYO2xmxddkdOjx/wuisJxuc6jh11AvN1NjfFicv7KWK0sJGa76w3rjr4nZKWFfOmcYYfS9VNEDQgiM/CKmATj8MgvUOz7CG0u6ZtuHE/ZQsyBzVxS5V7l9KllZrrKV8EKA5lncIwh6ZUzq9cBoEumc5MO2sqFGs586RTf4jtcRj1NvKlbDXkR70WdM+D4ODZ6lKSksAyzl3dEFv5Fy56HFFXgbdaPK8HC+f33bmtu04CseN586ElCyxK1YX6bzoX0uWlv+qXXWLosKt9zb5RLR737gvjnq92KwML7ww9A/mTwBHxVFxsMLXBTlosJscD/raX+vjY9Qd4KywmVBqphxLjpeOFA1CjDHUFAQyRImhufzcZUKW+lD/I2Rp9XfXCjzb5rjnzoh7DnF6Dpp0xglN5vN4ailO0NpRJvAGSIFYVR3HUVWsKVk1Ol3ZB9rj+B/z+JAPgIZmTl/+KrK0OqfHa+NSDOVxx8RN/dQ6NHr1C4XZvqMKCdOGT9LclQTzZ6iVy6YA2PRL14Ya4L9DlnNCw+FmT/gd57z76c8PbtJdCJZFuPMlqD6sFTj6lnsyWq3Fu1W1zch5WednFX4bWVq27lZUIMJ4nOm4YEWiIvDhl0sLIk4WmAOgzbzFd7yB+QnbN5Uq1gVq73qRbft1ZImbHK3UbABwBaComxNvjPW+lnBAxfNfYSytbFwDjHbfR5Uz7MXoFRdVAwDkOFFJJX4hWWIF6t3iAY+w09VzzLGtD88iP+PpatLG5qxAGlCsh2cZz8MWww5PWw3neGwIwrap98v42okj/aaYpcnycflfh3fnTTS8/PFRGlk2zqXE/xPaEdaZRm48zfAMDIJY2T6FBYHxwoVtTeS0Ryc4S4OZkQ1ArL52d9H7lrslMzD2f0aupabTTUjDjjV4LvBUEtjrfxrjTyqd2SH/zZv+fO4nDTDXSYmi6yl2sH7uPswsR/2MmhFStLjfhh+DSC9bKe7vHNFLDe1AjzYfQ+ccMYNLwO5Yjjv6s/iGACgfnf70cPJWCVdWXjReTG/E1v825v3p3teXp1HX87qj6LT0p0lGtwCd5xpnLOxeOPXHp5G3bW/NXbRcB2G/9pnB/wfAZJ9KLM6RSwAAAABJRU5ErkJggg=="
            alt="Error"
          />
            </a>
        </div>
        

        <div className="list">
          {blogdata.map((item) => {
            return (
              <div key={item._id} className="innerlist">
                <h3>{item.name}</h3>
                <h6 className="dateandicon">
                  Last Date:{item.lastDate} <button></button>
                </h6>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
