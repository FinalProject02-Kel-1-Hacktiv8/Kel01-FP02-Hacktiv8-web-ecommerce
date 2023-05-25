import Image from "next/image";

export const DashboardInfo = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Sells</div>
          <div className="stat-value text-primary">100 items</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Page Views</div>
          <div className="stat-value text-secondary">1.3M</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <i
                  className="far fa-user-circle text-6xl text-purple-500"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          </div>
          <div className="stat-value">86%</div>
          <div className="stat-title">Checkout done</div>
          <div className="stat-desc text-secondary">31 Invoice remaining</div>
        </div>
      </div>
      {/* Chart */}
      <div className="font-bold h-[300px] border-[1px] rounded-lg flex items-center justify-center my-5">
        <p>Chart</p>
      </div>
      <div className="stats bg-purple-800 text-primary-content w-[500px]">
        <div className="stat">
          <div className="stat-title text-white">Account balance</div>
          <div className="stat-value">$2,400</div>
          <div className="stat-actions">
            <button className="btn btn-sm btn-success">Add funds</button>
          </div>
        </div>

        <div className="stat">
          <div className="stat-title text-white">Current balance</div>
          <div className="stat-value">$2,400</div>
          <div className="stat-actions">
            <button className="btn btn-sm">Withdrawal</button>
            <button className="btn btn-sm ml-1">deposit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
