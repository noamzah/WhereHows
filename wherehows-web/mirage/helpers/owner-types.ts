import { ApiStatus } from 'wherehows-web/utils/api/shared';

const getOwnerTypes = function() {
  return {
    ownerTypes: ['DataOwner', 'Producer', 'Delegate', 'Stakeholder', 'Consumer'],
    status: ApiStatus.OK
  };
};

export { getOwnerTypes };
