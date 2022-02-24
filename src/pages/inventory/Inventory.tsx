import { Helmet } from 'react-helmet';

import PageHeader from '../../components/page-header/PageHeader';
import InventoryList from '../../components/inventory-list/InventoryList';

const Inventory = () => {
  return (
    <>
      <Helmet>
        <title>My Inventory (Preview) ⋅ Crypto Quest</title>
        <meta
          name="description"
          content="My Inventory (Preview) ⋅ Crypto Quest"
        />
      </Helmet>
      <PageHeader title="My Inventory (Preview)" spacing />
      <div className="section section--bg-curves">
        <div className="container container--medium m:pt-0">
          <div className="inventory relative zindex-1 mw-600px m:mw-900px mx-auto m:mt-n7">
            <div className="inventory__header pb-4">
              <div className="filters d-flex align-items-end gap-3 s:gap-4 fs-xl m:fs-xxl m:mx-3 ">
                <div className="d-flex flex-wrap flex-grow-1 justify-content-between gap-3 s:gap-4">
                  <select
                    className="form-select form-select--transparent"
                    aria-label="Filter By Attributes"
                    style={{ width: '232px' }}
                  >
                    <option>Filter By Attributes</option>
                  </select>
                  <select
                    className="form-select form-select--transparent"
                    aria-label="Sort By"
                    style={{ width: '117px' }}
                  >
                    <option>Sort By</option>
                  </select>
                </div>
                <div className="flex-shrink-0">2 Items</div>
              </div>
            </div>
            <InventoryList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Inventory;
