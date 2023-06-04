"""create users table

Revision ID: 520d932f2161
Revises: 
Create Date: 2023-05-30 20:38:19.111146

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '520d932f2161'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        'users',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('email', sa.String(50), nullable=False),
        sa.Column('hashed_password', sa.String(50), nullable=False),
        sa.Column('is_active', sa.Boolean, default=True),
    )


def downgrade():
    op.drop_table('users')