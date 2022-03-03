import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { injectIntl } from "gatsby-plugin-intl";

const Stats = () => {
  const [stats, setStats] = React.useState();
  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    fetch(`https://explorer.cartesi.io/api/mainnet/stats`)
      .then((response) => response.json())
      .then((resultData) => {
        setStats(resultData);
        ScrollTrigger.refresh();
      });
  }, []);

  React.useLayoutEffect(() => {
    const counterElements = gsap.utils.toArray("[data-anim-counter]");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: counterElements[0],
        id: "counterAnimation",
      },
    });

    counterElements.forEach(function (item) {
      let target = { val: 0 };

      tl.to(
        target,
        {
          val: item.getAttribute("data-anim-counter"),
          ease: "power4.out",
          duration: 3,
          onUpdate: function () {
            item.innerText = target.val.toLocaleString("en-US", {
              minimumFractionDigits: item.dataset.displayDecimal ? 2 : 0,
              maximumFractionDigits: item.dataset.displayDecimal ? 2 : 0,
            });
          },
        },
        0
      );
    });
  }, [stats]);

  const formatted = React.useMemo(() => {
    if (!stats) return;

    const {
      price,
      circulatingSupply,
      totalStaked,
      totalUsers,
      hiredNodes,
      projectedAnnualEarnings,
      participationRate,
    } = stats;

    return {
      price: price.toFixed(2),
      circulatingSupply: (circulatingSupply / 1000000).toFixed(2),
      totalStaked: (totalStaked / 1000000).toFixed(2),
      totalUsers: totalUsers,
      hiredNodes: hiredNodes,
      projectedAnnualEarnings: projectedAnnualEarnings.toFixed(2),
      participationRate: participationRate.toFixed(2),
    };
  }, [stats]);

  return (
    <div className="mb-12 grid grid-cols-3 gap-x-4 gap-y-10 xl:mb-24">
      {stats && (
        <>
          <div className="col-span-1 flex flex-col">
            <span className="font-serif text-4xl leading-none text-blue-200">
              <span>$</span>
              <span data-display-decimal data-anim-counter={formatted.price}>
                0
              </span>
            </span>
            <span>CTSI Price</span>
          </div>
          <div className="col-span-2 flex flex-col text-right">
            <span className="font-serif text-4xl leading-none text-blue-200">
              <span
                data-display-decimal
                data-anim-counter={formatted.circulatingSupply}
              >
                0
              </span>
              M <span>CTSI</span>
            </span>
            <span>Circ. Supply</span>
          </div>
          <div className="col-span-2 flex flex-col">
            <span className="font-serif text-4xl leading-none text-blue-200">
              <span
                data-display-decimal
                data-anim-counter={formatted.totalStaked}
              >
                0
              </span>
              M <span>CTSI</span>
            </span>
            <span>CTSI staked</span>
          </div>
          <div className="col-span-1 flex flex-col text-right">
            <span className="font-serif text-4xl leading-none text-blue-200">
              <span data-anim-counter={formatted.totalUsers}>0</span>
            </span>
            <span>Total Users</span>
          </div>

          <div className="col-span-1 flex flex-col">
            <span className="font-serif text-4xl leading-none text-blue-200">
              <span data-anim-counter={formatted.hiredNodes}>0</span>
            </span>
            <span>Active Nodes</span>
          </div>
          <div className="col-span-2 flex flex-col text-right">
            <span className="font-serif text-4xl leading-none text-blue-200">
              <span
                data-display-decimal
                data-anim-counter={formatted.projectedAnnualEarnings}
              >
                0
              </span>
              <span>%</span>
            </span>
            <span>Projected Annual Earnings</span>
          </div>

          <div className="col-span-2 flex flex-col">
            <span className="font-serif text-4xl leading-none text-blue-200">
              <span
                data-display-decimal
                data-anim-counter={formatted.participationRate}
              >
                0
              </span>
              <span>%</span>
            </span>
            <span>Participation Rate</span>
          </div>
        </>
      )}
    </div>
  );
};

export default injectIntl(Stats);
