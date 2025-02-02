
import { NamePrompt } from '../../../modules/memory/components/name-prompt.component';
import { getUserName } from '../../utils/utils';

export const ProtectedRouteComponent = props => {
  const userName = getUserName()
  if (!userName) return <NamePrompt />
  return props.children
};
