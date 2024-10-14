import User from '../models/User.js';

export const registerUser = async (req, res) => {
    const { email } = req.body;
    try {
        const newUser = new User({ email });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: 'User registration failed', error });
    }
};

export const getUserPreferences = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user.preferences);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user preferences', error });
    }
};

export const updateUserPreferences = async (req, res) => {
    const userId = req.params.id;
    const { preferences } = req.body;
    try {
        const user = await User.findByIdAndUpdate(userId, { preferences }, { new: true });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error updating preferences', error });
    }
};
