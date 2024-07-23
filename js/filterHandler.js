// filterHandler.js
import { renderTasks } from './taskHandler.js';

export function filterTasks(e) {
    const filter = e.target.id.replace('filter', '').toLowerCase();
    renderTasks(filter);
}

export function toggleFilter(toggleSwitch) {
    const filter = toggleSwitch.checked ? 'completed' : 'pending';
    renderTasks(filter);
}
